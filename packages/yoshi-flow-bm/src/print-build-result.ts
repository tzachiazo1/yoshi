import path from 'path';
import chalk from 'chalk';
import fileSize from 'filesize';
import { sync as gzipSize } from 'gzip-size';
import fs from 'fs-extra';
import stripAnsi from 'strip-ansi';
import webpack from 'webpack';
import { FlowBMModel } from './model';

import ToJsonOutput = webpack.Stats.ToJsonOutput;

function printTable(table: Array<Array<string | number>>, gap = 2) {
  const colWidths = table[0]
    .map((_, i) =>
      table.map(row => stripAnsi((row[i] ?? '').toString()).length),
    )
    .map(widths => Math.max(...widths));

  table.forEach(row => {
    console.log(
      row
        .map(
          (cell, x) =>
            cell.toString() +
            ' '.repeat(colWidths[x] - stripAnsi(cell.toString()).length),
        )
        .join(' '.repeat(gap)),
    );
  });
}

function prepare(model: FlowBMModel, stats: ToJsonOutput) {
  const { assets = [] } = stats ?? {};

  const shared = new Set(assets);

  const moduleAssets = assets.filter(({ chunkNames }) =>
    chunkNames.includes('module'),
  );

  const pages = model.pages.map(page => ({
    assets: assets.filter(({ chunkNames }) =>
      chunkNames.includes(page.componentName),
    ),
    page,
  }));

  const exportedComponents = model.exportedComponents.map(
    exportedComponent => ({
      assets: assets.filter(({ chunkNames }) =>
        chunkNames.includes(exportedComponent.componentId),
      ),
      exportedComponent,
    }),
  );

  moduleAssets.forEach(asset => shared.delete(asset));

  pages.forEach(({ assets }) => assets.forEach(asset => shared.delete(asset)));
  exportedComponents.forEach(({ assets }) =>
    assets.forEach(asset => shared.delete(asset)),
  );

  return {
    moduleAssets,
    pages,
    exportedComponents,
    shared,
  };
}

export default function printBuildResult(
  model: FlowBMModel,
  stats: ToJsonOutput,
) {
  const { moduleAssets, pages, exportedComponents, shared } = prepare(
    model,
    stats,
  );

  const table = [];

  table.push(
    ['Name', 'Size', 'Gzipped'].map(s => chalk.bold.underline.green(s)),
  );
  table.push([model.moduleId]);

  moduleAssets.forEach(asset =>
    table.push([
      ` ${chalk.dim('├')} ${asset.name}`,
      fileSize(asset.size),
      fileSize(
        gzipSize(
          fs.readFileSync(path.join(process.cwd(), 'dist/statics', asset.name)),
        ),
      ),
    ]),
  );

  if (pages.length > 0) {
    pages.forEach(({ assets, page }) => {
      table.push([
        ` ${chalk.dim('├')} /${page.route} ${chalk.dim(
          `(${page.componentName})`,
        )}`,
      ]);

      assets.forEach((asset, i) =>
        table.push([
          ` ${chalk.dim('│')}  ${chalk.dim(
            i === assets.length - 1 ? '└' : '├',
          )} ${asset.name}`,
          fileSize(asset.size),
          fileSize(
            gzipSize(
              fs.readFileSync(
                path.join(process.cwd(), 'dist/statics', asset.name),
              ),
            ),
          ),
        ]),
      );
    });
  }

  if (exportedComponents.length > 0) {
    exportedComponents.forEach(({ assets, exportedComponent }) => {
      table.push([` ${chalk.dim('├')} ${exportedComponent.componentId}`]);

      assets.forEach((asset, i) =>
        table.push([
          ` ${chalk.dim('│')}  ${chalk.dim(
            i === assets.length - 1 ? '└' : '├',
          )} ${asset.name}`,
          fileSize(asset.size),
          fileSize(
            gzipSize(
              fs.readFileSync(
                path.join(process.cwd(), 'dist/statics', asset.name),
              ),
            ),
          ),
        ]),
      );
    });
  }

  if (shared.size > 0) {
    table.push([` ${chalk.dim('└')} Shared`]);

    [...shared].forEach((asset, i) => {
      table.push(
        [
          `    ${chalk.dim(i === shared.size - 1 ? '└' : '├')} ${asset.name}`,
          fileSize(asset.size),
          fileSize(
            gzipSize(
              fs.readFileSync(
                path.join(process.cwd(), 'dist/statics', asset.name),
              ),
            ),
          ),
        ].map(s => chalk.dim(s)),
      );
    });
  }

  printTable(table);
}

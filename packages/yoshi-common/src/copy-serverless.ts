import path from 'path';
import fs from 'fs-extra';
import { Config } from 'yoshi-config/build/config';
import { getServerlessScope } from 'yoshi-helpers/utils';
import { SERVERLESS_DIR, SERVERLESS_SCOPE_DIR } from 'yoshi-config/build/paths';

export default async function (config: Config, cwd = process.cwd()) {
  if (!config.yoshiServer || !process.env.EXPERIMENTAL_YOSHI_SERVERLESS) {
    return;
  }

  const scopeName = getServerlessScope();

  const serverlessTemplateFolder = path.resolve(
    __dirname,
    '../src/templates',
    SERVERLESS_DIR,
  );

  const serverlessDestinationPath = path.resolve(
    cwd,
    SERVERLESS_SCOPE_DIR(scopeName),
  );

  fs.copySync(serverlessTemplateFolder, serverlessDestinationPath);
}

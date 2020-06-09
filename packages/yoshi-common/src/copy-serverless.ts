import path from 'path';
import fs from 'fs-extra';
import { Config } from 'yoshi-config/build/config';
import { SERVERLESS_DIR } from 'yoshi-config/build/paths';

export default async function(
  config: Config,
  scopeName: string,
  cwd = process.cwd(),
) {
  if (!config.yoshiServer || !process.env.EXPERIMENTAL_YOSHI_SERVERLESS) {
    return;
  }

  const serverlessTemplateFolder = path.resolve(
    __dirname,
    '../src/templates',
    SERVERLESS_DIR,
  );

  const serverlessDestinationPath = path.resolve(
    cwd,
    SERVERLESS_DIR,
    scopeName,
  );

  fs.copySync(serverlessTemplateFolder, serverlessDestinationPath);
}

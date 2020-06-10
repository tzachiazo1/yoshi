const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { CLIEngine } = require('eslint');
const uniq = require('lodash/uniq');

const serializeResults = (results) => JSON.stringify(results, null, 2);
const relativeToTestDir = (filePath) =>
  path.relative(path.join(__dirname, '..'), filePath);

// get the rule ids from eslint results object
const getRulesIds = (results) =>
  // use uniq to filter multiple occurrences of the same rule
  uniq(
    results.results
      .map((result) => result.messages.map((message) => message.ruleId))[0]
      // remove the "ruleDir/" prefix so rules like "import/no-umd" will become "no-umd"
      .map((ruleId) =>
        ruleId.lastIndexOf('/')
          ? ruleId.slice(ruleId.lastIndexOf('/') + 1)
          : ruleId,
      ),
  );

describe('eslint-config-yoshi', () => {
  describe('rules', () => {
    const eslintCli = new CLIEngine({
      configFile: require.resolve('../index'),
      useEslintrc: false,
      ignore: false,
    });
    const rulesDir = path.resolve(__dirname, './rules');
    const rules = fs.readdirSync(rulesDir);

    rules.forEach((rule) => {
      describe(rule, () => {
        const ruleDir = path.join(rulesDir, rule);
        const validFiles = glob.sync(path.join(ruleDir, 'valid*.[tj]s'));

        validFiles.forEach((validFile) => {
          it(`should be valid for ${relativeToTestDir(validFile)}`, () => {
            const results = eslintCli.executeOnFiles([validFile]);

            if (results.errorCount !== 0) {
              throw new Error(
                `the following file had errors\n ${serializeResults(results)}
              `,
              );
            }

            if (results.warningCount !== 0) {
              throw new Error(
                `the following file had warnings\n ${serializeResults(results)}
              `,
              );
            }
          });
        });

        const invalidFiles = glob.sync(path.join(ruleDir, 'invalid*.[tj]s'));

        invalidFiles.forEach((invalidFile) => {
          it(`should error with ${rule} for ${relativeToTestDir(
            invalidFile,
          )}`, () => {
            const results = eslintCli.executeOnFiles([invalidFile]);
            const rulesIds = getRulesIds(results);

            try {
              expect(rulesIds).toEqual([rule]);
            } catch (err) {
              console.error(serializeResults(results));

              throw err;
            }
          });
        });

        const warningFiles = glob.sync(path.join(ruleDir, 'warn*.js'));

        warningFiles.forEach((warningFile) => {
          it(`should warn with ${rule} for ${relativeToTestDir(
            warningFile,
          )}`, () => {
            const results = eslintCli.executeOnFiles([warningFile]);
            const rulesIds = getRulesIds(results);

            try {
              expect(rulesIds).toEqual([rule]);
            } catch (err) {
              console.error(serializeResults(results));

              throw err;
            }
          });
        });
      });
    });
  });
});

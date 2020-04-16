export default async context => {
  return { config: context.config.load('{%projectName%}') };
};

import Listr from 'listr';

export const addSentry = ({
  teamName,
  projectName,
}: {
  teamName: string;
  projectName: string;
}) => {
  const tasks = require('@wix/add-sentry/lib/tasks');
  const {
    configureSentry,
    handleError,
  } = require('@wix/add-sentry/lib/sentry');

  configureSentry();

  const tasksToExecute = [
    tasks.createSentryTeam(teamName),
    tasks.createSentryProject(projectName, teamName),
    tasks.getSentryProjectDSNKeys,
  ];

  const taskRunner = new Listr(tasksToExecute);

  return taskRunner
    .run()
    .then(ctx => {
      tasks.printProjectLink(ctx);
      return ctx;
    })
    .catch(handleError);
};

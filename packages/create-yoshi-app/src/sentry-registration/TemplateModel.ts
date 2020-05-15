export default class TemplateModel {
  readonly teamName: string;
  readonly projectName: string;
  readonly DSN: string;
  readonly id: string;

  constructor({
    teamName,
    projectName,
    DSN,
    id,
  }: {
    teamName: string;
    projectName: string;
    DSN: string;
    id: string;
  }) {
    this.teamName = teamName;
    this.projectName = projectName;
    this.DSN = DSN;
    this.id = id;
  }
}

export class Sample {
  id: number;

  name: string;

  constructor(json?: any) {
    this.id = json.id || '';
    this.name = json.name || '';
  }

  get fullName() {
    return `${this.name} John`;
  }
}

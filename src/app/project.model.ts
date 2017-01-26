export class Project {
  constructor (public genre: string, public title: string, public description: string, public image: string, public funding: number = 0, public fundingcomplete: number) {}
}

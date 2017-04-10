import { Injectable } from '@angular/core';

@Injectable()
export class SourceLinkServiceService {

  public sourceLink;

  public setSourceLink(path: string) {
    this.sourceLink = "https://github.com/GEDOPLAN/angular-demo/tree/master" + path;
  }

  public clearSourceLink() {
    this.sourceLink = null;
  }
}

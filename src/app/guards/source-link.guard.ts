import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SourceLinkServiceService } from '../services/source-link-service.service';

@Injectable()
export class SourceLinkGuard implements CanActivate {

  constructor(private src: SourceLinkServiceService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.src.clearSourceLink();

    return true;
  }
}

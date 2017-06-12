import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class NotAllowedGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot) {
    return true;
  }
}

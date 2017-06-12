import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';

import { Page1Component } from '../pages/page1/page1.component';

@Injectable()
export class NotEmptyGuard implements CanDeactivate<Page1Component>{

  constructor() { }

  canDeactivate(page: Page1Component, currentRoute: ActivatedRouteSnapshot) {
    page.message = page.canLeave() ? '' : 'Please fill in any value'
    return page.canLeave();
  }
}
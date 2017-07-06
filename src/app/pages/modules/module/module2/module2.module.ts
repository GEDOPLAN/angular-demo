import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';

import {ROUTES} from './module2.routing';

@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [PageComponent]
})
export class Module2Module { }

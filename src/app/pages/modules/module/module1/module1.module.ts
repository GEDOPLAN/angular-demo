import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';

import { ROUTES } from './module1.routing';
import { ModuleSharedModule } from '../module-shared/module-shared.module';

@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [PageComponent]
})
export class Module1Module { }

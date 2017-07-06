import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HelloComponent } from './components/hello/hello.component';

import { ROUTES } from './module1.routing';
@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [
    PageComponent,
    HelloComponent
    ],
  providers: [
    HelloComponent
  ]
})
export class Module1Module { }

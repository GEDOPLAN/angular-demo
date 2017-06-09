import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SourceLinkServiceService } from './services/source-link-service.service';
import { SourceLinkGuard } from './guards/source-link.guard';
import { ColorfullComponent } from './pages/template/colorfull/colorfull.component';
import {PAGES, ROUTES} from './app.route';
import { Page3Component } from './pages/navigation/pages/page3/page3.component';
import { Page4Component } from './pages/navigation/pages/page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    PAGES,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTES
  ],
  providers: [
    SourceLinkServiceService,
    SourceLinkGuard,
    { provide: 'DEMO-TOKEN', useValue: 'Value from Root.' }
  ],
  entryComponents: [
    ColorfullComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

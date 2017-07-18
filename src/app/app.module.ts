import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, OpaqueToken, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { SourceLinkServiceService } from './services/source-link-service.service';
import { SourceLinkGuard } from './guards/source-link.guard';
import { ColorfullComponent } from './pages/template/colorfull/colorfull.component';
import { PAGES, ROUTES } from './app.route';

import { NotAllowedGuardService } from './pages/navigation/guards/not-allowed-guard.service';
import { NotEmptyGuard } from './pages/navigation/guards/not-empty-guard.service';
import { Page1Component } from './pages/navigation/pages/page1/page1.component';
import { ResolveService } from './pages/navigation/service/resolve.service';
import { ErrorHandleService } from './pages/http/services/error-handle.service';
import { HttpInterceptor } from './pages/http/services/http-interceptor.service';

import { Module1Module } from './pages/modules/module/module1/module1.module';
import { ModuleSharedModule } from './pages/modules/module/module-shared/module-shared.module';
import {Add10Component} from './pages/testing/components/add10/add10.component';
import { I18nComponent } from './pages/i18n/i18n.component';


@NgModule({
  declarations: [
    AppComponent,
    PAGES,
    Add10Component,
    I18nComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTES,
    Module1Module,
    ModuleSharedModule.forRoot()
  ],
  providers: [
    SourceLinkServiceService,
    SourceLinkGuard,
    NotAllowedGuardService,
    NotEmptyGuard,
    Page1Component,
    ResolveService,
    { provide: 'DEMO-TOKEN', useValue: 'Value from Root.' },
    // { provide: ErrorHandler, useClass: ErrorHandleService },
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions],
      useClass: HttpInterceptor
    }
  ],
  entryComponents: [
    ColorfullComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

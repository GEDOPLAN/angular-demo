import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, ErrorHandler } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    PAGES
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
    NotAllowedGuardService,
    NotEmptyGuard,
    Page1Component,
    ResolveService,
    { provide: 'DEMO-TOKEN', useValue: 'Value from Root.' },
    { provide: ErrorHandler, useClass: ErrorHandleService },
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

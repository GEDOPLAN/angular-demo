import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SourceLinkGuard } from './guards/source-link.guard';
import { SourceLinkServiceService } from './services/source-link-service.service';
import { HomeComponent } from './home/home.component';
import { HelloProxyComponent } from './hello-proxy/hello-proxy.component';
import { TemplateComponent } from './template/template.component';
import { ColorfullComponent } from './template/colorfull/colorfull.component';
import { BoxComponent } from './template/box/box.component';
import { BoxHeaderDirective } from './template/box/box-header.directive';
import { CustomerInfoComponent } from './template/customer-info/customer-info.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [SourceLinkGuard]},
  { path: 'hello', component: HelloProxyComponent , canActivate: [SourceLinkGuard]},
  { path: 'template', component: TemplateComponent , canActivate: [SourceLinkGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloProxyComponent,
    TemplateComponent,
    ColorfullComponent,
    BoxComponent,
    BoxHeaderDirective,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SourceLinkServiceService,
    SourceLinkGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    TemplateComponent
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

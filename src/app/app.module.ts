import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SourceLinkGuard } from './guards/source-link.guard';
import { SourceLinkServiceService } from './services/source-link-service.service';
import { HomeComponent } from './home/home.component';
import { HelloProxyComponent } from './hello-proxy/hello-proxy.component';
import { TemplateComponent } from './template/template.component';
import { ComponentComponent } from './component/component.component';
import { VeEmulateComponent, VeNativeComponent, VeNoneComponent } from './component/components';
import { ColorfullComponent } from './template/colorfull/colorfull.component';
import { BoxComponent } from './template/box/box.component';
import { BoxHeaderDirective } from './template/box/box-header.directive';
import { CustomerInfoComponent } from './template/customer-info/customer-info.component';
import { DirectiveComponent } from './directive/directive.component';
import { ColorfullHelloWorldDirective } from './directive/directives/colorfull-hello-world.directive';
import { LogDirective } from './directive/directives/log.directive';
import { ErrorbuttonDirective } from './directive/directives/errorbutton.directive';
import { TemplateRefComponent } from './component/components/template-ref/template-ref.component';
import { IterationComponentComponent } from './component/components/iteration-component/iteration-component.component';
import { DynamicComponent } from './component/components/dynamic/dynamic.component';
import { RepeatMeDirective } from './component/components/directives/repeat-me.directive';
import { AlertComponent } from './component/components/alert/alert.component';
import { ChangeMeComponent } from './component/components/change-me/change-me.component';
import { ChangeMeComponentOnPush } from './component/components/change-me-push/change-me.component';
import { ChangeMeComponentRef } from './component/components/change-me-ref/change-me.component';
import { BuildInsComponent } from './build-ins/build-ins.component';
import { MultiPipe } from './build-ins/pipes/multi.pipe';
import { DiComponent } from './di/di.component';
import { ChildComponent } from './di/components/child/child.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RangeValidatorDirective } from './template-driven/directives/range-validator.directive';
import { AsyncPostValidatorDirective } from './template-driven/directives/async-post-validator.directive';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [SourceLinkGuard] },
  { path: 'hello', component: HelloProxyComponent, canActivate: [SourceLinkGuard] },
  { path: 'template', component: TemplateComponent, canActivate: [SourceLinkGuard] },
  { path: 'directive', component: DirectiveComponent, canActivate: [SourceLinkGuard] },
  { path: 'component', component: ComponentComponent, canActivate: [SourceLinkGuard] },
  { path: 'buildin', component: BuildInsComponent, canActivate: [SourceLinkGuard] },
  { path: 'di', component: DiComponent, canActivate: [SourceLinkGuard] },
  { path: 'tp', component: TemplateDrivenComponent, canActivate: [SourceLinkGuard] }
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
    CustomerInfoComponent,
    ComponentComponent,
    VeEmulateComponent, VeNativeComponent, VeNoneComponent,
    DirectiveComponent,
    ColorfullHelloWorldDirective,
    LogDirective,
    ErrorbuttonDirective,
    TemplateRefComponent,
    IterationComponentComponent,
    DynamicComponent,
    RepeatMeDirective,
    AlertComponent,
    ChangeMeComponent,
    ChangeMeComponentOnPush,
    ChangeMeComponentRef,
    BuildInsComponent,
    MultiPipe,
    DiComponent,
    ChildComponent,
    TemplateDrivenComponent,
    RangeValidatorDirective,
    AsyncPostValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
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

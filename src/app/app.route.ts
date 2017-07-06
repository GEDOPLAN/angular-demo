import { RouterModule, Routes } from '@angular/router';
import { SourceLinkGuard } from './guards/source-link.guard';

import { ResolveService } from './pages/navigation/service/resolve.service';

import { HomeComponent } from './pages/home/home.component';
import { HelloProxyComponent } from './hello-proxy/hello-proxy.component';
import { TemplateComponent } from './pages/template/template.component';
import { ComponentComponent } from './pages/component/component.component';
import { VeEmulateComponent, VeNativeComponent, VeNoneComponent } from './pages/component/components';
import { ColorfullComponent } from './pages/template/colorfull/colorfull.component';
import { BoxComponent } from './pages/template/box/box.component';
import { BoxHeaderDirective } from './pages/template/box/box-header.directive';
import { CustomerInfoComponent } from './pages/template/customer-info/customer-info.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ColorfullHelloWorldDirective } from './pages/directive/directives/colorfull-hello-world.directive';
import { LogDirective } from './pages/directive/directives/log.directive';
import { ErrorbuttonDirective } from './pages/directive/directives/errorbutton.directive';
import { TemplateRefComponent } from './pages/component/components/template-ref/template-ref.component';
import { IterationComponentComponent } from './pages/component/components/iteration-component/iteration-component.component';
import { DynamicComponent } from './pages/component/components/dynamic/dynamic.component';
import { RepeatMeDirective } from './pages/component/components/directives/repeat-me.directive';
import { AlertComponent } from './pages/component/components/alert/alert.component';
import { ChangeMeComponent } from './pages/component/components/change-me/change-me.component';
import { ChangeMeComponentOnPush } from './pages/component/components/change-me-push/change-me.component';
import { ChangeMeComponentRef } from './pages/component/components/change-me-ref/change-me.component';
import { BuildInsComponent } from './pages/build-ins/build-ins.component';
import { MultiPipe } from './pages/build-ins/pipes/multi.pipe';
import { DiComponent } from './pages/di/di.component';
import { ChildComponent } from './pages/di/components/child/child.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { RangeValidatorDirective } from './pages/template-driven/directives/range-validator.directive';
import { AsyncPostValidatorDirective } from './pages/template-driven/directives/async-post-validator.directive';
import { ModelDrivenComponent } from './pages/model-driven/model-driven.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { Page1Component } from './pages/navigation/pages/page1/page1.component';
import { Page2Component } from './pages/navigation/pages/page2/page2.component';
import { Page3Component } from './pages/navigation/pages/page3/page3.component';
import { Page4Component } from './pages/navigation/pages/page4/page4.component';
import { NotAllowedGuardService } from './pages/navigation/guards/not-allowed-guard.service';
import { NotEmptyGuard } from './pages/navigation/guards/not-empty-guard.service';
import { HttpComponent } from './pages/http/http.component';
import { TestingComponent } from './pages/testing/testing.component';
import { ModulesComponent } from './pages/modules/modules.component';

import { Module1Module } from './pages/modules/module/module1/module1.module';

export function getModule1Module(){
  return Module1Module;
}

export const ROUTES = RouterModule.forRoot([
  { path: '', component: HomeComponent, canActivate: [SourceLinkGuard] },
  { path: 'hello', component: HelloProxyComponent, canActivate: [SourceLinkGuard] },
  { path: 'template', component: TemplateComponent, canActivate: [SourceLinkGuard] },
  { path: 'directive', component: DirectiveComponent, canActivate: [SourceLinkGuard] },
  { path: 'component', component: ComponentComponent, canActivate: [SourceLinkGuard] },
  { path: 'buildin', component: BuildInsComponent, canActivate: [SourceLinkGuard] },
  { path: 'di', component: DiComponent, canActivate: [SourceLinkGuard] },
  { path: 'tp', component: TemplateDrivenComponent, canActivate: [SourceLinkGuard] },
  { path: 'md', component: ModelDrivenComponent, canActivate: [SourceLinkGuard] },
  {
    path: 'navigation', component: NavigationComponent, canActivate: [SourceLinkGuard],
    children: [
      { path: 'p1', component: Page1Component },
      { path: 'p2/:text', component: Page2Component },
      { path: 'p3', component: Page3Component },
      { path: 'p4', component: Page4Component },
      { path: 'p4-notallowed', component: Page4Component, canActivate: [NotAllowedGuardService] },
      { path: 'p1-notempty', component: Page1Component, canDeactivate: [NotEmptyGuard] },
      {
        path: 'p1-resolve', component: Page1Component, resolve: {
          message: ResolveService
        }
      },
      { path: 'p1-footer', component: Page1Component, outlet: 'footer' },
      { path: '**', redirectTo: 'p3', pathMatch: 'full' },
    ]

  },
  { path: 'http', component: HttpComponent, canActivate: [SourceLinkGuard] },
  { path: 'test', component: TestingComponent, canActivate: [SourceLinkGuard] },
  {
    path: 'modules', component: ModulesComponent, canActivate: [SourceLinkGuard], children: [
      { path: 'modules-path1', loadChildren: getModule1Module },
      { path: 'modules-path2', loadChildren: 'app/pages/modules/module/module2/module2.module#Module2Module' }
    ]
  }
]);

export const PAGES = [
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
  AsyncPostValidatorDirective,
  ModelDrivenComponent,
  NavigationComponent,
  Page1Component,
  Page2Component,
  Page3Component,
  Page4Component,
  HttpComponent,
  TestingComponent,
  ModulesComponent
]
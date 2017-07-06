import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldServiceShared } from './hello-world.service';
import { SharedHelloComponent } from './shared-hello/shared-hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [SharedHelloComponent],
  exports: [
    SharedHelloComponent
  ]
})
export class ModuleSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModuleSharedModule,
      providers: [
        HelloWorldServiceShared
      ]
    }
  }
}

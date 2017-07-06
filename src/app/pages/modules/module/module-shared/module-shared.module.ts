import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldServiceShared } from './hello-world.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: []
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

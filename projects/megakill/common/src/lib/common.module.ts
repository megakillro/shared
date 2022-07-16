import { ModuleWithProviders, NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ]
})

export class MegakillCommonModule {
  static forRoot(config: MegakillCommonModuleConfig): ModuleWithProviders<MegakillCommonModule> {
    return {
      ngModule: MegakillCommonModule,
      providers: [
        { provide: MegakillCommonModuleConfig, useValue: config }
      ]
    };
  }
}

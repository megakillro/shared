import { ModuleWithProviders, NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule
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

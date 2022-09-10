import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    OkPortalDialogComponent,
    SelectPortalDialogComponent
  ],
  imports: [
    MatIconModule,
    MatDialogModule
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

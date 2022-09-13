import { ConfirmationAsyncDialogComponent } from './confirmation-async-dialog/confirmation-async-dialog.component';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ConfirmationAsyncDialogComponent,
    OkPortalDialogComponent,
    SelectPortalDialogComponent
  ],
  imports: [
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    ConfirmationDialogModule
  ],
  exports: [
    ConfirmationDialogModule
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

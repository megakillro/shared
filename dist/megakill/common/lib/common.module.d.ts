import { ModuleWithProviders } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./confirmation-async-dialog/confirmation-async-dialog.component";
import * as i2 from "./ok-portal-dialog/ok-portal-dialog.component";
import * as i3 from "./select-portal-dialog/select-portal-dialog.component";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/dialog";
import * as i6 from "@angular/material/progress-bar";
import * as i7 from "./confirmation-dialog/confirmation-dialog.module";
import * as i8 from "@angular/common/http";
export declare class MegakillCommonModule {
    static forRoot(config: MegakillCommonModuleConfig): ModuleWithProviders<MegakillCommonModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegakillCommonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MegakillCommonModule, [typeof i1.ConfirmationAsyncDialogComponent, typeof i2.OkPortalDialogComponent, typeof i3.SelectPortalDialogComponent], [typeof i4.MatIconModule, typeof i5.MatDialogModule, typeof i6.MatProgressBarModule, typeof i7.ConfirmationDialogModule, typeof i8.HttpClientModule], [typeof i7.ConfirmationDialogModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MegakillCommonModule>;
}

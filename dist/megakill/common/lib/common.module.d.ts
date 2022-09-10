import { ModuleWithProviders } from '@angular/core';
import { MegakillCommonModuleConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./ok-portal-dialog/ok-portal-dialog.component";
import * as i2 from "./select-portal-dialog/select-portal-dialog.component";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/dialog";
export declare class MegakillCommonModule {
    static forRoot(config: MegakillCommonModuleConfig): ModuleWithProviders<MegakillCommonModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MegakillCommonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MegakillCommonModule, [typeof i1.OkPortalDialogComponent, typeof i2.SelectPortalDialogComponent], [typeof i3.MatIconModule, typeof i4.MatDialogModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MegakillCommonModule>;
}

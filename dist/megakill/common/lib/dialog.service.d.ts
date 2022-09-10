import { MatDialog } from '@angular/material/dialog';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import * as i0 from "@angular/core";
export declare class DialogService {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openOkDialog(data: any): import("@angular/material/dialog").MatDialogRef<OkDialogComponent, any>;
    openOkPortalDialog(data: any): import("@angular/material/dialog").MatDialogRef<OkPortalDialogComponent, any>;
    openSelectPortalDialog(data: any): import("@angular/material/dialog").MatDialogRef<SelectPortalDialogComponent, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogService>;
}

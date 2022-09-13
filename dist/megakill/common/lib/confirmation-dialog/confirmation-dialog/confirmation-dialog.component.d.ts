import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ConfirmationDialogComponent implements OnInit {
    dialogRef: MatDialogRef<ConfirmationDialogComponent>;
    data: any;
    message: string;
    constructor(dialogRef: MatDialogRef<ConfirmationDialogComponent>, data: any);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationDialogComponent, "megakill-confirmation-dialog", never, {}, {}, never, never, false>;
}

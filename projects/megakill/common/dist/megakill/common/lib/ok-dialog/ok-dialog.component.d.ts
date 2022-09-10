import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class OkDialogComponent implements OnInit {
    dialogRef: MatDialogRef<OkDialogComponent>;
    data: any;
    title: string;
    message: string;
    constructor(dialogRef: MatDialogRef<OkDialogComponent>, data: any);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OkDialogComponent, "megakill-ok-dialog", never, {}, {}, never, never, false>;
}

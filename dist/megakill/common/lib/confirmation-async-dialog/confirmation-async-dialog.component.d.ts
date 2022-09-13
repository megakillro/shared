import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare class ConfirmationAsyncDialogComponent implements OnInit {
    private snackBar;
    dialogRef: MatDialogRef<ConfirmationAsyncDialogComponent>;
    data: any;
    fn: Function;
    loading: boolean;
    message: string;
    errorMessage: string;
    successMessage: string;
    constructor(snackBar: MatSnackBar, dialogRef: MatDialogRef<ConfirmationAsyncDialogComponent>, data: any);
    confirm(): void;
    reject(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationAsyncDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationAsyncDialogComponent, "megakill-confirmation-async-dialog", never, {}, {}, never, never, false>;
}

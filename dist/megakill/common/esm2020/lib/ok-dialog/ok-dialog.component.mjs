import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class OkDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.message = '';
        if (data && data.title) {
            this.title = data.title;
        }
        if (data && data.message) {
            this.message = data.message;
        }
    }
    ngOnInit() { }
}
OkDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
OkDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: OkDialogComponent, selector: "megakill-ok-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content>\n        <p>{{message}}</p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-ok-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content>\n        <p>{{message}}</p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL29rLWRpYWxvZy9vay1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvb2stZGlhbG9nL29rLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFPekUsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUNTLFNBQTBDLEVBQ2pCLElBQVM7UUFEbEMsY0FBUyxHQUFULFNBQVMsQ0FBaUM7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUwzQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUtYLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7OzhHQWhCSCxpQkFBaUIsOENBTWxCLGVBQWU7a0dBTmQsaUJBQWlCLDBEQ1I5Qix1UEFNTTsyRkRFTyxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0Usb0JBQW9COzswQkFVM0IsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWdha2lsbC1vay1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vb2stZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIE9rRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUgPSAnJztcbiAgbWVzc2FnZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxPa0RpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3t0aXRsZX19PC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICAgICAgICA8cD57e21lc3NhZ2V9fTwvcD5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U9XCJ0cnVlXCIgY2RrRm9jdXNJbml0aWFsIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XG48L2Rpdj4iXX0=
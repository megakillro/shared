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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvb2stZGlhbG9nL29rLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL29rLWRpYWxvZy9vay1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBT3pFLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFDUyxTQUEwQyxFQUNqQixJQUFTO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQUs7UUFMM0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFLWCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDOzs4R0FoQkgsaUJBQWlCLDhDQU1sQixlQUFlO2tHQU5kLGlCQUFpQiwwRENSOUIsdVBBTU07MkZERU8saUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLG9CQUFvQjs7MEJBVTNCLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVnYWtpbGwtb2stZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29rLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBPa0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gJyc7XG4gIG1lc3NhZ2UgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8T2tEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS50aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbn1cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7dGl0bGV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgICAgICAgPHA+e3ttZXNzYWdlfX08L3A+XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPVwidHJ1ZVwiIGNka0ZvY3VzSW5pdGlhbCBjb2xvcj1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxuPC9kaXY+Il19
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/progress-bar";
export class ConfirmationAsyncDialogComponent {
    constructor(snackBar, dialogRef, data) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fn = () => { };
        this.loading = false;
        // TO DO: i18n
        this.message = 'Sunteți sigur că doriți să efectuați această acțiune?';
        // TO DO: i18n
        this.errorMessage = 'Eroare: operațiunea nu a putut fi efectuată!';
        // TO DO: i18n
        this.successMessage = 'Operațiunea a fost efectuată cu succes!';
        if (data && data.message) {
            this.message = data.message;
        }
        if (data && data.errorMessage) {
            this.errorMessage = data.errorMessage;
        }
        if (data && data.successMessage) {
            this.successMessage = data.successMessage;
        }
        if (data && data.fn) {
            this.fn = data.fn;
        }
        else {
            console.error(`No fn provided for ConfirmationAsyncDialogComponent with message "${this.message}"`);
        }
    }
    confirm() {
        this.loading = true;
        this.fn().then((result) => {
            this.loading = false;
            this.dialogRef.close(result);
            this.snackBar.open(this.successMessage, 'OK', {
                duration: 3000
            });
        }).catch((err) => {
            this.loading = false;
            this.dialogRef.close({ error: err });
            this.snackBar.open(this.errorMessage, 'OK', {
                duration: 3000
            });
        });
    }
    reject() {
        this.dialogRef.close();
    }
    ngOnInit() { }
}
ConfirmationAsyncDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ConfirmationAsyncDialogComponent, deps: [{ token: i1.MatSnackBar }, { token: i2.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
ConfirmationAsyncDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: ConfirmationAsyncDialogComponent, selector: "megakill-confirmation-async-dialog", ngImport: i0, template: "<!-- TO DO: fix ngStyle -->\n<!-- [ngStyle]=\"{'visibility': loading ? 'visible':'hidden'}\" -->\n\n<mat-progress-bar\n  mode=\"indeterminate\"\n  ></mat-progress-bar>\n<h1 mat-dialog-title>Confirmare necesar\u0103</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"message\"></p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button (click)=\"reject()\" cdkFocusInitial [disabled]=\"loading\">NU</button>\n        <button mat-button (click)=\"confirm()\" color=\"primary\" [disabled]=\"loading\">{{ loading ? 'SE \u00CENCARC\u0102...' : 'DA' }}</button>\n</div>", styles: ["mat-progress-bar{transition:.125s ease-in-out all;top:-25px;left:-25px;width:calc(100% + 50px)}\n"], dependencies: [{ kind: "directive", type: i2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i2.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "component", type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ConfirmationAsyncDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-confirmation-async-dialog', template: "<!-- TO DO: fix ngStyle -->\n<!-- [ngStyle]=\"{'visibility': loading ? 'visible':'hidden'}\" -->\n\n<mat-progress-bar\n  mode=\"indeterminate\"\n  ></mat-progress-bar>\n<h1 mat-dialog-title>Confirmare necesar\u0103</h1>\n<div mat-dialog-content>\n  <p [innerHTML]=\"message\"></p>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button (click)=\"reject()\" cdkFocusInitial [disabled]=\"loading\">NU</button>\n        <button mat-button (click)=\"confirm()\" color=\"primary\" [disabled]=\"loading\">{{ loading ? 'SE \u00CENCARC\u0102...' : 'DA' }}</button>\n</div>", styles: ["mat-progress-bar{transition:.125s ease-in-out all;top:-25px;left:-25px;width:calc(100% + 50px)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }, { type: i2.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWFzeW5jLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9jb25maXJtYXRpb24tYXN5bmMtZGlhbG9nL2NvbmZpcm1hdGlvbi1hc3luYy1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvY29uZmlybWF0aW9uLWFzeW5jLWRpYWxvZy9jb25maXJtYXRpb24tYXN5bmMtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBUXpFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFVM0MsWUFDVSxRQUFxQixFQUN0QixTQUF5RCxFQUNoQyxJQUFTO1FBRmpDLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBZ0Q7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBSztRQVozQyxPQUFFLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBYztRQUNkLFlBQU8sR0FBRyx1REFBdUQsQ0FBQztRQUNsRSxjQUFjO1FBQ2QsaUJBQVksR0FBRyw4Q0FBOEMsQ0FBQztRQUM5RCxjQUFjO1FBQ2QsbUJBQWMsR0FBRyx5Q0FBeUMsQ0FBQztRQU12RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDckc7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRTtnQkFDNUMsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFO2dCQUMxQyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRLEtBQUksQ0FBQzs7NkhBdERKLGdDQUFnQyx5RUFhakMsZUFBZTtpSEFiZCxnQ0FBZ0MsMEVDVDdDLDJrQkFhTTsyRkRKTyxnQ0FBZ0M7a0JBTDVDLFNBQVM7K0JBQ0Usb0NBQW9DOzswQkFpQjNDLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVnYWtpbGwtY29uZmlybWF0aW9uLWFzeW5jLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24tYXN5bmMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLWFzeW5jLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkFzeW5jRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm46IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgLy8gVE8gRE86IGkxOG5cbiAgbWVzc2FnZSA9ICdTdW50ZcibaSBzaWd1ciBjxIMgZG9yacibaSBzxIMgZWZlY3R1YcibaSBhY2Vhc3TEgyBhY8ibaXVuZT8nO1xuICAvLyBUTyBETzogaTE4blxuICBlcnJvck1lc3NhZ2UgPSAnRXJvYXJlOiBvcGVyYcibaXVuZWEgbnUgYSBwdXR1dCBmaSBlZmVjdHVhdMSDISc7XG4gIC8vIFRPIERPOiBpMThuXG4gIHN1Y2Nlc3NNZXNzYWdlID0gJ09wZXJhyJtpdW5lYSBhIGZvc3QgZWZlY3R1YXTEgyBjdSBzdWNjZXMhJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWF0aW9uQXN5bmNEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3JNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBkYXRhLnN1Y2Nlc3NNZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmZuKSB7XG4gICAgICAgIHRoaXMuZm4gPSBkYXRhLmZuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgTm8gZm4gcHJvdmlkZWQgZm9yIENvbmZpcm1hdGlvbkFzeW5jRGlhbG9nQ29tcG9uZW50IHdpdGggbWVzc2FnZSBcIiR7dGhpcy5tZXNzYWdlfVwiYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmZuKCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHJlc3VsdCk7XG4gICAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnN1Y2Nlc3NNZXNzYWdlLCAnT0snLCB7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuZXJyb3JNZXNzYWdlLCAnT0snLCB7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZWplY3QoKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge31cbn1cbiIsIjwhLS0gVE8gRE86IGZpeCBuZ1N0eWxlIC0tPlxuPCEtLSBbbmdTdHlsZV09XCJ7J3Zpc2liaWxpdHknOiBsb2FkaW5nID8gJ3Zpc2libGUnOidoaWRkZW4nfVwiIC0tPlxuXG48bWF0LXByb2dyZXNzLWJhclxuICBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiXG4gID48L21hdC1wcm9ncmVzcy1iYXI+XG48aDEgbWF0LWRpYWxvZy10aXRsZT5Db25maXJtYXJlIG5lY2VzYXLEgzwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHAgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+PC9wPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInJlamVjdCgpXCIgY2RrRm9jdXNJbml0aWFsIFtkaXNhYmxlZF09XCJsb2FkaW5nXCI+TlU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJjb25maXJtKClcIiBjb2xvcj1cInByaW1hcnlcIiBbZGlzYWJsZWRdPVwibG9hZGluZ1wiPnt7IGxvYWRpbmcgPyAnU0Ugw45OQ0FSQ8SCLi4uJyA6ICdEQScgfX08L2J1dHRvbj5cbjwvZGl2PiJdfQ==
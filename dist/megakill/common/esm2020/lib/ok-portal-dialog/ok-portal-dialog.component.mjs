import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { CONTAINER_DATA } from '../injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class OkPortalDialogComponent {
    constructor(injector, dialogRef, data) {
        this.injector = injector;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.componentData = null;
        if (data && data.title) {
            this.title = data.title;
        }
        if (!data || !data.component) {
            throw new Error('OkDialog: data.component is undefined');
        }
        this.component = data.component;
        if (!data.componentData) {
            throw new Error('OkDialog: data.component.componentData is undefined');
        }
        this.componentData = data.componentData;
        this.componentPortal = new ComponentPortal(this.component, null, this.createInjector(this.componentData));
    }
    createInjector(dataToPass) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, dataToPass);
        return new PortalInjector(this.injector, injectorTokens);
    }
    ngOnInit() { }
    onPortalAttached(event) {
        console.log(event.instance.selectedRow);
        console.log(event);
        this.eventSelectedRow = event.instance.selectedRow.subscribe((el) => {
            console.log(el);
        });
    }
}
OkPortalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkPortalDialogComponent, deps: [{ token: i0.Injector }, { token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
OkPortalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: OkPortalDialogComponent, selector: "megakill-ok-portal-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>", dependencies: [{ kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: OkPortalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-ok-portal-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\">OK</button>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9vay1wb3J0YWwtZGlhbG9nL29rLXBvcnRhbC1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvb2stcG9ydGFsLWRpYWxvZy9vay1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBUXJELE1BQU0sT0FBTyx1QkFBdUI7SUFPbEMsWUFDVSxRQUFrQixFQUNuQixTQUFnRCxFQUN2QixJQUFTO1FBRmpDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBSztRQVQzQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFRbkIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXhDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxFQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFlO1FBQzVCLE1BQU0sY0FBYyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDckMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxRQUFRLEtBQUssQ0FBQztJQUVkLGdCQUFnQixDQUFDLEtBQVU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztvSEFoRFUsdUJBQXVCLHNFQVV4QixlQUFlO3dHQVZkLHVCQUF1QixpRUNacEMsdVdBTU07MkZETU8sdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDJCQUEyQjs7MEJBY2xDLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlLCBQb3J0YWxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBDT05UQUlORVJfREFUQSB9IGZyb20gJy4uL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lZ2FraWxsLW9rLXBvcnRhbC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vb2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gJyc7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxhbnk+O1xuICBjb21wb25lbnREYXRhID0gbnVsbDtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PjtcbiAgZXZlbnRTZWxlY3RlZFJvdzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxPa1BvcnRhbERpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEuY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09rRGlhbG9nOiBkYXRhLmNvbXBvbmVudCBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuXG4gICAgaWYgKCFkYXRhLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT2tEaWFsb2c6IGRhdGEuY29tcG9uZW50LmNvbXBvbmVudERhdGEgaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnREYXRhID0gZGF0YS5jb21wb25lbnREYXRhO1xuXG4gICAgdGhpcy5jb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxuICAgICAgdGhpcy5jb21wb25lbnQsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5jcmVhdGVJbmplY3Rvcih0aGlzLmNvbXBvbmVudERhdGEpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUluamVjdG9yKGRhdGFUb1Bhc3M6IGFueSk6IFBvcnRhbEluamVjdG9yIHtcbiAgICBjb25zdCBpbmplY3RvclRva2VucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgaW5qZWN0b3JUb2tlbnMuc2V0KENPTlRBSU5FUl9EQVRBLCBkYXRhVG9QYXNzKTtcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdG9yVG9rZW5zKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgb25Qb3J0YWxBdHRhY2hlZChldmVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuaW5zdGFuY2Uuc2VsZWN0ZWRSb3cpIFxuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIHRoaXMuZXZlbnRTZWxlY3RlZFJvdyA9IGV2ZW50Lmluc3RhbmNlLnNlbGVjdGVkUm93LnN1YnNjcmliZSgoZWw6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWwpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZT57e3RpdGxlfX08L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgc3R5bGU9XCJoZWlnaHQ6IDEwMCVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiY29tcG9uZW50UG9ydGFsXCIgKGF0dGFjaGVkKT1cIm9uUG9ydGFsQXR0YWNoZWQoJGV2ZW50KVwiPjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJ0cnVlXCIgY2RrRm9jdXNJbml0aWFsIGNvbG9yPVwicHJpbWFyeVwiPk9LPC9idXR0b24+XG48L2Rpdj4iXX0=
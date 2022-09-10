import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { CONTAINER_DATA } from '../injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class SelectPortalDialogComponent {
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
            throw new Error('SelectDialog: data.component is undefined');
        }
        this.component = data.component;
        if (!data.componentData) {
            throw new Error('SelectDialog: data.component.componentData is undefined');
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
        this.eventSelectedRow = event.instance.selectedRow.subscribe((row) => {
            console.log(row);
            this.selectedRow = row;
            console.log("SelectPortalDialogComponent -> onPortalAttached -> this.selectedRow", this.selectedRow);
        });
    }
    getSelectedRowAfterClose() {
        this.dialogRef.close(this.selectedRow);
        console.log("SelectPortalDialogComponent -> getSelectedRowAfterClose -> this.dialogRef.close(this.selectedRow);", this.selectedRow);
    }
}
SelectPortalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: SelectPortalDialogComponent, deps: [{ token: i0.Injector }, { token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
SelectPortalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: SelectPortalDialogComponent, selector: "megakill-select-portal-dialog", ngImport: i0, template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>ANULEAZ\u0102</button>\n        <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\" (click)=\"getSelectedRowAfterClose()\">SELECTEAZ\u0102</button>\n</div>\n", dependencies: [{ kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: SelectPortalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-select-portal-dialog', template: "<h1 mat-dialog-title>{{title}}</h1>\n<div mat-dialog-content style=\"height: 100%\">\n        <ng-template [cdkPortalOutlet]=\"componentPortal\" (attached)=\"onPortalAttached($event)\"></ng-template>\n</div>\n<div mat-dialog-actions align=\"end\">\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>ANULEAZ\u0102</button>\n        <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"primary\" (click)=\"getSelectedRowAfterClose()\">SELECTEAZ\u0102</button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBvcnRhbC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZWxlY3QtcG9ydGFsLWRpYWxvZy9zZWxlY3QtcG9ydGFsLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NlbGVjdC1wb3J0YWwtZGlhbG9nL3NlbGVjdC1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBaUIsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFPckQsTUFBTSxPQUFPLDJCQUEyQjtJQVN0QyxZQUNVLFFBQWtCLEVBQ25CLFNBQW9ELEVBQzNCLElBQVM7UUFGakMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBVjNDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQVNuQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDNUU7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FDeEMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLEVBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLFVBQWU7UUFDNUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyQyxjQUFjLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBRWQsZ0JBQWdCLENBQUMsS0FBVTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0dBQW9HLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JJLENBQUM7O3dIQXpEVSwyQkFBMkIsc0VBWTVCLGVBQWU7NEdBWmQsMkJBQTJCLHFFQ1h4QyxtZ0JBUUE7MkZER2EsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLCtCQUErQjs7MEJBZXRDLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUsIFBvcnRhbEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IENPTlRBSU5FUl9EQVRBIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVnYWtpbGwtc2VsZWN0LXBvcnRhbC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LXBvcnRhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFBvcnRhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGl0bGUgPSAnJztcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG4gIGNvbXBvbmVudERhdGEgPSBudWxsO1xuICBjb21wb25lbnRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuICBldmVudFNlbGVjdGVkUm93OiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkUm93OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFNlbGVjdFBvcnRhbERpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEuY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdERpYWxvZzogZGF0YS5jb21wb25lbnQgaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcblxuICAgIGlmICghZGF0YS5jb21wb25lbnREYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdERpYWxvZzogZGF0YS5jb21wb25lbnQuY29tcG9uZW50RGF0YSBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudERhdGEgPSBkYXRhLmNvbXBvbmVudERhdGE7XG5cbiAgICB0aGlzLmNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoXG4gICAgICB0aGlzLmNvbXBvbmVudCxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLmNyZWF0ZUluamVjdG9yKHRoaXMuY29tcG9uZW50RGF0YSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlSW5qZWN0b3IoZGF0YVRvUGFzczogYW55KTogUG9ydGFsSW5qZWN0b3Ige1xuICAgIGNvbnN0IGluamVjdG9yVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcbiAgICBpbmplY3RvclRva2Vucy5zZXQoQ09OVEFJTkVSX0RBVEEsIGRhdGFUb1Bhc3MpO1xuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0b3JUb2tlbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBvblBvcnRhbEF0dGFjaGVkKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5pbnN0YW5jZS5zZWxlY3RlZFJvdykgXG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgdGhpcy5ldmVudFNlbGVjdGVkUm93ID0gZXZlbnQuaW5zdGFuY2Uuc2VsZWN0ZWRSb3cuc3Vic2NyaWJlKChyb3c6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvd1xuICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RQb3J0YWxEaWFsb2dDb21wb25lbnQgLT4gb25Qb3J0YWxBdHRhY2hlZCAtPiB0aGlzLnNlbGVjdGVkUm93XCIsIHRoaXMuc2VsZWN0ZWRSb3cpXG4gICAgfSlcbiAgfVxuXG4gIGdldFNlbGVjdGVkUm93QWZ0ZXJDbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLnNlbGVjdGVkUm93KTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbGVjdFBvcnRhbERpYWxvZ0NvbXBvbmVudCAtPiBnZXRTZWxlY3RlZFJvd0FmdGVyQ2xvc2UgLT4gdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5zZWxlY3RlZFJvdyk7XCIsIHRoaXMuc2VsZWN0ZWRSb3cpXG4gIH1cbn1cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7dGl0bGV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudCBzdHlsZT1cImhlaWdodDogMTAwJVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJjb21wb25lbnRQb3J0YWxcIiAoYXR0YWNoZWQpPVwib25Qb3J0YWxBdHRhY2hlZCgkZXZlbnQpXCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cInRydWVcIiBjZGtGb2N1c0luaXRpYWw+QU5VTEVBWsSCPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiIGNka0ZvY3VzSW5pdGlhbCBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZ2V0U2VsZWN0ZWRSb3dBZnRlckNsb3NlKClcIj5TRUxFQ1RFQVrEgjwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=
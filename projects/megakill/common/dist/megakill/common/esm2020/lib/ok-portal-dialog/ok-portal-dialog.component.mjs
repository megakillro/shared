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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL29rLXBvcnRhbC1kaWFsb2cvb2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL29rLXBvcnRhbC1kaWFsb2cvb2stcG9ydGFsLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFpQixjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVFyRCxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLFlBQ1UsUUFBa0IsRUFDbkIsU0FBZ0QsRUFDdkIsSUFBUztRQUZqQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQUs7UUFUM0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBUW5CLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUN4QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksRUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBZTtRQUM1QixNQUFNLGNBQWMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsUUFBUSxLQUFLLENBQUM7SUFFZCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7b0hBaERVLHVCQUF1QixzRUFVeEIsZUFBZTt3R0FWZCx1QkFBdUIsaUVDWnBDLHVXQU1NOzJGRE1PLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSwyQkFBMkI7OzBCQWNsQyxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSwgUG9ydGFsSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgQ09OVEFJTkVSX0RBVEEgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWdha2lsbC1vay1wb3J0YWwtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29rLXBvcnRhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgT2tQb3J0YWxEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZSA9ICcnO1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PjtcbiAgY29tcG9uZW50RGF0YSA9IG51bGw7XG4gIGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT47XG4gIGV2ZW50U2VsZWN0ZWRSb3c6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8T2tQb3J0YWxEaWFsb2dDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS50aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmNvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPa0RpYWxvZzogZGF0YS5jb21wb25lbnQgaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcblxuICAgIGlmICghZGF0YS5jb21wb25lbnREYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09rRGlhbG9nOiBkYXRhLmNvbXBvbmVudC5jb21wb25lbnREYXRhIGlzIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50RGF0YSA9IGRhdGEuY29tcG9uZW50RGF0YTtcblxuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChcbiAgICAgIHRoaXMuY29tcG9uZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuY3JlYXRlSW5qZWN0b3IodGhpcy5jb21wb25lbnREYXRhKVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVJbmplY3RvcihkYXRhVG9QYXNzOiBhbnkpOiBQb3J0YWxJbmplY3RvciB7XG4gICAgY29uc3QgaW5qZWN0b3JUb2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgIGluamVjdG9yVG9rZW5zLnNldChDT05UQUlORVJfREFUQSwgZGF0YVRvUGFzcyk7XG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3RvclRva2Vucyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG9uUG9ydGFsQXR0YWNoZWQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50Lmluc3RhbmNlLnNlbGVjdGVkUm93KSBcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICB0aGlzLmV2ZW50U2VsZWN0ZWRSb3cgPSBldmVudC5pbnN0YW5jZS5zZWxlY3RlZFJvdy5zdWJzY3JpYmUoKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVsKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3t0aXRsZX19PC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50IHN0eWxlPVwiaGVpZ2h0OiAxMDAlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cImNvbXBvbmVudFBvcnRhbFwiIChhdHRhY2hlZCk9XCJvblBvcnRhbEF0dGFjaGVkKCRldmVudClcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiIGNka0ZvY3VzSW5pdGlhbCBjb2xvcj1cInByaW1hcnlcIj5PSzwvYnV0dG9uPlxuPC9kaXY+Il19
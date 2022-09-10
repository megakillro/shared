import { Injectable } from '@angular/core';
import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openOkDialog(data) {
        return this.dialog.open(OkDialogComponent, { data });
    }
    openOkPortalDialog(data) {
        return this.dialog.open(OkPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
    }
    openSelectPortalDialog(data) {
        return this.dialog.open(SelectPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
    }
}
DialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
DialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: DialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQUt4RixNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQztJQUV6QyxZQUFZLENBQUMsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBUztRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDOzswR0FkVSxhQUFhOzhHQUFiLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgU2VsZWN0UG9ydGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtcG9ydGFsLWRpYWxvZy9zZWxlY3QtcG9ydGFsLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2tEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL29rLWRpYWxvZy9vay1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE9rUG9ydGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vay1wb3J0YWwtZGlhbG9nL29rLXBvcnRhbC1kaWFsb2cuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBvcGVuT2tEaWFsb2coZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oT2tEaWFsb2dDb21wb25lbnQsIHsgZGF0YSB9KTtcbiAgfVxuXG4gIG9wZW5Pa1BvcnRhbERpYWxvZyhkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCwgeyBkYXRhLCB3aWR0aDogJzkwdncnLCBtYXhXaWR0aDogJzkwdncnLCBoZWlnaHQ6ICc4MHZoJyB9KTtcbiAgfVxuXG4gIG9wZW5TZWxlY3RQb3J0YWxEaWFsb2coZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oU2VsZWN0UG9ydGFsRGlhbG9nQ29tcG9uZW50LCB7IGRhdGEsIHdpZHRoOiAnOTB2dycsIG1heFdpZHRoOiAnOTB2dycsIGhlaWdodDogJzgwdmgnIH0pO1xuICB9XG59XG4iXX0=
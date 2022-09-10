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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFLeEYsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7SUFFekMsWUFBWSxDQUFDLElBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUVELHNCQUFzQixDQUFDLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7MEdBZFUsYUFBYTs4R0FBYixhQUFhLGNBRlosTUFBTTsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFNlbGVjdFBvcnRhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXBvcnRhbC1kaWFsb2cvc2VsZWN0LXBvcnRhbC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE9rRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vay1kaWFsb2cvb2stZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPa1BvcnRhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb2stcG9ydGFsLWRpYWxvZy9vay1wb3J0YWwtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgb3Blbk9rRGlhbG9nKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKE9rRGlhbG9nQ29tcG9uZW50LCB7IGRhdGEgfSk7XG4gIH1cblxuICBvcGVuT2tQb3J0YWxEaWFsb2coZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oT2tQb3J0YWxEaWFsb2dDb21wb25lbnQsIHsgZGF0YSwgd2lkdGg6ICc5MHZ3JywgbWF4V2lkdGg6ICc5MHZ3JywgaGVpZ2h0OiAnODB2aCcgfSk7XG4gIH1cblxuICBvcGVuU2VsZWN0UG9ydGFsRGlhbG9nKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKFNlbGVjdFBvcnRhbERpYWxvZ0NvbXBvbmVudCwgeyBkYXRhLCB3aWR0aDogJzkwdncnLCBtYXhXaWR0aDogJzkwdncnLCBoZWlnaHQ6ICc4MHZoJyB9KTtcbiAgfVxufVxuIl19
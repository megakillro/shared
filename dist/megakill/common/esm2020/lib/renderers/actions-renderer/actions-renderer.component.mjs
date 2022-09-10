import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../dialog.service";
export class ActionsRenderer {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    agInit(params) {
        this.params = params;
    }
    edit() {
        this.params.context.componentParent.edit(this.params.data);
    }
    delete() {
        this.params.context.componentParent.delete(this.params.data);
    }
    showHistory() {
        const dialogRef = this.dialogService.openOkPortalDialog({
            title: 'Istoric',
            component: this.params.context.componentParent.historyDialogComponentType,
            componentData: {
                id: this.params.data._id
            }
        });
        return dialogRef;
    }
    refreshParent() {
        this.params.context.componentParent.getData();
    }
    refresh() {
        return false;
    }
}
ActionsRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ActionsRenderer, deps: [{ token: i1.DialogService }], target: i0.ɵɵFactoryTarget.Component });
ActionsRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: ActionsRenderer, selector: "megakill-actions-renderer", ngImport: i0, template: "<button mat-icon-button (click)=\"edit()\" matTooltip=\"Editeaz\u0103\" color=\"primary\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>edit</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  Editeaz\u0103\n</button>\n<button mat-icon-button (click)=\"delete()\" matTooltip=\"\u0218terge\" color=\"accent\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>delete</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  \u0218terge\n</button>\n<!-- TO DO: i18n -->\n<button mat-icon-button (click)=\"showHistory()\" matTooltip=\"Vezi istoricul\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>history</mat-icon> -->\n  <!-- TO DO: i18n (temp)-->\n  Istoric\n</button>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: ActionsRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-actions-renderer', template: "<button mat-icon-button (click)=\"edit()\" matTooltip=\"Editeaz\u0103\" color=\"primary\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>edit</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  Editeaz\u0103\n</button>\n<button mat-icon-button (click)=\"delete()\" matTooltip=\"\u0218terge\" color=\"accent\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>delete</mat-icon> -->\n  <!-- TO DO: i18n (temp) -->\n  \u0218terge\n</button>\n<!-- TO DO: i18n -->\n<button mat-icon-button (click)=\"showHistory()\" matTooltip=\"Vezi istoricul\">\n  <!-- TO DO: replace mat-icon with svgs -->\n  <!-- <mat-icon>history</mat-icon> -->\n  <!-- TO DO: i18n (temp)-->\n  Istoric\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9yZW5kZXJlcnMvYWN0aW9ucy1yZW5kZXJlci9hY3Rpb25zLXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL3JlbmRlcmVycy9hY3Rpb25zLXJlbmRlcmVyL2FjdGlvbnMtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUzFDLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUksQ0FBQztJQUVyRCxNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7WUFDdEQsS0FBSyxFQUFFLFNBQVM7WUFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQywwQkFBMEI7WUFDekUsYUFBYSxFQUFFO2dCQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO2FBQ3pCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzRHQW5DVSxlQUFlO2dHQUFmLGVBQWUsaUVDVDVCLDBzQkFtQkE7MkZEVmEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCB9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcic7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWdha2lsbC1hY3Rpb25zLXJlbmRlcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbnMtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uc1JlbmRlcmVyIGltcGxlbWVudHMgSUNlbGxSZW5kZXJlckFuZ3VsYXJDb21wIHtcbiAgcHVibGljIHBhcmFtczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkgeyB9XG5cbiAgYWdJbml0KHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgZWRpdCgpIHtcbiAgICB0aGlzLnBhcmFtcy5jb250ZXh0LmNvbXBvbmVudFBhcmVudC5lZGl0KHRoaXMucGFyYW1zLmRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZSgpIHtcbiAgICB0aGlzLnBhcmFtcy5jb250ZXh0LmNvbXBvbmVudFBhcmVudC5kZWxldGUodGhpcy5wYXJhbXMuZGF0YSk7XG4gIH1cblxuICBzaG93SGlzdG9yeSgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbk9rUG9ydGFsRGlhbG9nKHtcbiAgICAgIHRpdGxlOiAnSXN0b3JpYycsXG4gICAgICBjb21wb25lbnQ6IHRoaXMucGFyYW1zLmNvbnRleHQuY29tcG9uZW50UGFyZW50Lmhpc3RvcnlEaWFsb2dDb21wb25lbnRUeXBlLFxuICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICBpZDogdGhpcy5wYXJhbXMuZGF0YS5faWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICByZWZyZXNoUGFyZW50KCkge1xuICAgIHRoaXMucGFyYW1zLmNvbnRleHQuY29tcG9uZW50UGFyZW50LmdldERhdGEoKTtcbiAgfVxuXG4gIHJlZnJlc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZWRpdCgpXCIgbWF0VG9vbHRpcD1cIkVkaXRlYXrEg1wiIGNvbG9yPVwicHJpbWFyeVwiPlxuICA8IS0tIFRPIERPOiByZXBsYWNlIG1hdC1pY29uIHdpdGggc3ZncyAtLT5cbiAgPCEtLSA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+IC0tPlxuICA8IS0tIFRPIERPOiBpMThuICh0ZW1wKSAtLT5cbiAgRWRpdGVhesSDXG48L2J1dHRvbj5cbjxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUoKVwiIG1hdFRvb2x0aXA9XCLImHRlcmdlXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgPCEtLSBUTyBETzogcmVwbGFjZSBtYXQtaWNvbiB3aXRoIHN2Z3MgLS0+XG4gIDwhLS0gPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+IC0tPlxuICA8IS0tIFRPIERPOiBpMThuICh0ZW1wKSAtLT5cbiAgyJh0ZXJnZVxuPC9idXR0b24+XG48IS0tIFRPIERPOiBpMThuIC0tPlxuPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNob3dIaXN0b3J5KClcIiBtYXRUb29sdGlwPVwiVmV6aSBpc3RvcmljdWxcIj5cbiAgPCEtLSBUTyBETzogcmVwbGFjZSBtYXQtaWNvbiB3aXRoIHN2Z3MgLS0+XG4gIDwhLS0gPG1hdC1pY29uPmhpc3Rvcnk8L21hdC1pY29uPiAtLT5cbiAgPCEtLSBUTyBETzogaTE4biAodGVtcCktLT5cbiAgSXN0b3JpY1xuPC9idXR0b24+XG4iXX0=
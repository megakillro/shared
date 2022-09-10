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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3JlbmRlcmVycy9hY3Rpb25zLXJlbmRlcmVyL2FjdGlvbnMtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9yZW5kZXJlcnMvYWN0aW9ucy1yZW5kZXJlci9hY3Rpb25zLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVMxQyxNQUFNLE9BQU8sZUFBZTtJQUcxQixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFckQsTUFBTSxDQUFDLE1BQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RELEtBQUssRUFBRSxTQUFTO1lBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsMEJBQTBCO1lBQ3pFLGFBQWEsRUFBRTtnQkFDYixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRzthQUN6QjtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs0R0FuQ1UsZUFBZTtnR0FBZixlQUFlLGlFQ1Q1Qiwwc0JBbUJBOzJGRFZhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2RpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVnYWtpbGwtYWN0aW9ucy1yZW5kZXJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb25zLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFjdGlvbnNSZW5kZXJlciBpbXBsZW1lbnRzIElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCB7XG4gIHB1YmxpYyBwYXJhbXM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHsgfVxuXG4gIGFnSW5pdChwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgcHVibGljIGVkaXQoKSB7XG4gICAgdGhpcy5wYXJhbXMuY29udGV4dC5jb21wb25lbnRQYXJlbnQuZWRpdCh0aGlzLnBhcmFtcy5kYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoKSB7XG4gICAgdGhpcy5wYXJhbXMuY29udGV4dC5jb21wb25lbnRQYXJlbnQuZGVsZXRlKHRoaXMucGFyYW1zLmRhdGEpO1xuICB9XG5cbiAgc2hvd0hpc3RvcnkoKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW5Pa1BvcnRhbERpYWxvZyh7XG4gICAgICB0aXRsZTogJ0lzdG9yaWMnLFxuICAgICAgY29tcG9uZW50OiB0aGlzLnBhcmFtcy5jb250ZXh0LmNvbXBvbmVudFBhcmVudC5oaXN0b3J5RGlhbG9nQ29tcG9uZW50VHlwZSxcbiAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgaWQ6IHRoaXMucGFyYW1zLmRhdGEuX2lkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgcmVmcmVzaFBhcmVudCgpIHtcbiAgICB0aGlzLnBhcmFtcy5jb250ZXh0LmNvbXBvbmVudFBhcmVudC5nZXREYXRhKCk7XG4gIH1cblxuICByZWZyZXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImVkaXQoKVwiIG1hdFRvb2x0aXA9XCJFZGl0ZWF6xINcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgPCEtLSBUTyBETzogcmVwbGFjZSBtYXQtaWNvbiB3aXRoIHN2Z3MgLS0+XG4gIDwhLS0gPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPiAtLT5cbiAgPCEtLSBUTyBETzogaTE4biAodGVtcCkgLS0+XG4gIEVkaXRlYXrEg1xuPC9idXR0b24+XG48YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKClcIiBtYXRUb29sdGlwPVwiyJh0ZXJnZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gIDwhLS0gVE8gRE86IHJlcGxhY2UgbWF0LWljb24gd2l0aCBzdmdzIC0tPlxuICA8IS0tIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPiAtLT5cbiAgPCEtLSBUTyBETzogaTE4biAodGVtcCkgLS0+XG4gIMiYdGVyZ2VcbjwvYnV0dG9uPlxuPCEtLSBUTyBETzogaTE4biAtLT5cbjxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzaG93SGlzdG9yeSgpXCIgbWF0VG9vbHRpcD1cIlZlemkgaXN0b3JpY3VsXCI+XG4gIDwhLS0gVE8gRE86IHJlcGxhY2UgbWF0LWljb24gd2l0aCBzdmdzIC0tPlxuICA8IS0tIDxtYXQtaWNvbj5oaXN0b3J5PC9tYXQtaWNvbj4gLS0+XG4gIDwhLS0gVE8gRE86IGkxOG4gKHRlbXApLS0+XG4gIElzdG9yaWNcbjwvYnV0dG9uPlxuIl19
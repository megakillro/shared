import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BooleanRenderer {
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
}
BooleanRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: BooleanRenderer, deps: [], target: i0.ɵɵFactoryTarget.Component });
BooleanRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: BooleanRenderer, selector: "megakill-boolean-renderer", ngImport: i0, template: "<!-- TO DO: i18n -->\n{{ params.value ? 'Da' : 'Nu' }}\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === true\" style=\"margin-top: 10px\">check</mat-icon> -->\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === false\" style=\"margin-top: 10px\">clear</mat-icon> -->", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: BooleanRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-boolean-renderer', template: "<!-- TO DO: i18n -->\n{{ params.value ? 'Da' : 'Nu' }}\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === true\" style=\"margin-top: 10px\">check</mat-icon> -->\n<!-- TO DO: replace icon with SVG -->\n<!-- <mat-icon *ngIf=\"params.value === false\" style=\"margin-top: 10px\">clear</mat-icon> -->" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9yZW5kZXJlcnMvYm9vbGVhbi1yZW5kZXJlci9ib29sZWFuLXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL3JlbmRlcmVycy9ib29sZWFuLXJlbmRlcmVyL2Jvb2xlYW4tcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFTbEQsTUFBTSxPQUFPLGVBQWU7SUFHMUIsTUFBTSxDQUFDLE1BQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzRHQVRVLGVBQWU7Z0dBQWYsZUFBZSxpRUNUNUIsdVVBSzJGOzJGREk5RSxlQUFlO2tCQU4zQixTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWdha2lsbC1ib29sZWFuLXJlbmRlcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2xlYW4tcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib29sZWFuLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuUmVuZGVyZXIgaW1wbGVtZW50cyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgIHtcbiAgcHVibGljIHBhcmFtczogYW55O1xuXG4gIGFnSW5pdChwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgcmVmcmVzaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIjwhLS0gVE8gRE86IGkxOG4gLS0+XG57eyBwYXJhbXMudmFsdWUgPyAnRGEnIDogJ051JyB9fVxuPCEtLSBUTyBETzogcmVwbGFjZSBpY29uIHdpdGggU1ZHIC0tPlxuPCEtLSA8bWF0LWljb24gKm5nSWY9XCJwYXJhbXMudmFsdWUgPT09IHRydWVcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5jaGVjazwvbWF0LWljb24+IC0tPlxuPCEtLSBUTyBETzogcmVwbGFjZSBpY29uIHdpdGggU1ZHIC0tPlxuPCEtLSA8bWF0LWljb24gKm5nSWY9XCJwYXJhbXMudmFsdWUgPT09IGZhbHNlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+Y2xlYXI8L21hdC1pY29uPiAtLT4iXX0=
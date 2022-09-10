import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../s3.service";
export class S3DownloadRenderer {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.s3Service.download(this.params.value);
    }
}
S3DownloadRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3DownloadRenderer, deps: [{ token: i1.S3Service }], target: i0.ɵɵFactoryTarget.Component });
S3DownloadRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: S3DownloadRenderer, selector: "appointments-solution-s3-download-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3DownloadRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'appointments-solution-s3-download-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.S3Service }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtZG93bmxvYWQtcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9yZW5kZXJlcnMvczMtZG93bmxvYWQtcmVuZGVyZXIvczMtZG93bmxvYWQtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9yZW5kZXJlcnMvczMtZG93bmxvYWQtcmVuZGVyZXIvczMtZG93bmxvYWQtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBU2xELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFDVSxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzNCLENBQUM7SUFJSixNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7K0dBakJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGtGQ1QvQixnaUJBV007MkZERk8sa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xuaW1wb3J0IHsgUzNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vczMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcG9pbnRtZW50cy1zb2x1dGlvbi1zMy1kb3dubG9hZC1yZW5kZXJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zMy1kb3dubG9hZC1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3MzLWRvd25sb2FkLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUzNEb3dubG9hZFJlbmRlcmVyIGltcGxlbWVudHMgSUNlbGxSZW5kZXJlckFuZ3VsYXJDb21wICB7XG4gIGNvbnN0cnVjdG9yIChcbiAgICBwcml2YXRlIHMzU2VydmljZTogUzNTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgcGFyYW1zOiBhbnk7XG5cbiAgYWdJbml0KHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICByZWZyZXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvd25sb2FkKCkge1xuICAgIHJldHVybiB0aGlzLnMzU2VydmljZS5kb3dubG9hZCh0aGlzLnBhcmFtcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImRvd25sb2FkKClcIiAqbmdJZj1cInBhcmFtcy52YWx1ZVwiIGNsYXNzPVwiZG93bmxvYWRcIj5cbiAgICA8IS0tIFRPIERPOiByZXBsYWNlIGljb24gd2l0aCBTVkcgLS0+XG4gICAgPCEtLSA8bWF0LWljb24+Z2V0X2FwcDwvbWF0LWljb24+IC0tPlxuICAgIDwhLS0gVE8gRE86IGkxOG4gLS0+XG4gICAgPHNwYW4+REVTQ0FSQ8SCPC9zcGFuPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiIXBhcmFtcy52YWx1ZVwiIGNsYXNzPVwibm8tZmlsZVwiIG1hdFRvb2x0aXA9XCJFZGl0ZWF6xIMgZG9jdW1lbnR1bCBwZW50cnUgYSBwdXRlYSDDrm5jxINyY2EgdW4gZmnImWllci5cIj5cbiAgICA8IS0tIFRPIERPOiByZXBsYWNlIGljb24gd2l0aCBTVkcgLS0+XG4gICAgPCEtLSA8bWF0LWljb24+Y2xlYXI8L21hdC1pY29uPiAtLT5cbiAgICA8IS0tIFRPIERPOiBpMThuIC0tPlxuICAgIDxzcGFuPk5pY2l1biBmaciZaWVyIGFzb2NpYXQuPC9zcGFuPlxuPC9kaXY+Il19
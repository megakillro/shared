import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../local-files.service";
export class LocalDownloadRenderer {
    constructor(localFilesService) {
        this.localFilesService = localFilesService;
    }
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    download() {
        return this.localFilesService.download(this.params.value);
    }
}
LocalDownloadRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalDownloadRenderer, deps: [{ token: i1.LocalFilesService }], target: i0.ɵɵFactoryTarget.Component });
LocalDownloadRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: LocalDownloadRenderer, selector: "appointments-solution-local-download-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalDownloadRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'appointments-solution-local-download-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>get_app</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>DESCARC\u0102</span>\n</div>\n<div *ngIf=\"!params.value\" class=\"no-file\" matTooltip=\"Editeaz\u0103 documentul pentru a putea \u00EEnc\u0103rca un fi\u0219ier.\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>clear</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>Niciun fi\u0219ier asociat.</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.LocalFilesService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZG93bmxvYWQtcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvcmVuZGVyZXJzL2xvY2FsLWRvd25sb2FkLXJlbmRlcmVyL2xvY2FsLWRvd25sb2FkLXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL3JlbmRlcmVycy9sb2NhbC1kb3dubG9hZC1yZW5kZXJlci9sb2NhbC1kb3dubG9hZC1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFTbEQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzNDLENBQUM7SUFJSixNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOztrSEFqQlUscUJBQXFCO3NHQUFyQixxQkFBcUIscUZDVGxDLGdpQkFXTTsyRkRGTyxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCB9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcic7XG5pbXBvcnQgeyBMb2NhbEZpbGVzU2VydmljZSB9IGZyb20gJy4uLy4uL2xvY2FsLWZpbGVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHBvaW50bWVudHMtc29sdXRpb24tbG9jYWwtZG93bmxvYWQtcmVuZGVyZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYWwtZG93bmxvYWQtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2NhbC1kb3dubG9hZC1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsRG93bmxvYWRSZW5kZXJlciBpbXBsZW1lbnRzIElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCAge1xuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBsb2NhbEZpbGVzU2VydmljZTogTG9jYWxGaWxlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBwYXJhbXM6IGFueTtcblxuICBhZ0luaXQocGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHJlZnJlc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG93bmxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxGaWxlc1NlcnZpY2UuZG93bmxvYWQodGhpcy5wYXJhbXMudmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJkb3dubG9hZCgpXCIgKm5nSWY9XCJwYXJhbXMudmFsdWVcIiBjbGFzcz1cImRvd25sb2FkXCI+XG4gICAgPCEtLSBUTyBETzogcmVwbGFjZSBpY29uIHdpdGggU1ZHIC0tPlxuICAgIDwhLS0gPG1hdC1pY29uPmdldF9hcHA8L21hdC1pY29uPiAtLT5cbiAgICA8IS0tIFRPIERPOiBpMThuIC0tPlxuICAgIDxzcGFuPkRFU0NBUkPEgjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cIiFwYXJhbXMudmFsdWVcIiBjbGFzcz1cIm5vLWZpbGVcIiBtYXRUb29sdGlwPVwiRWRpdGVhesSDIGRvY3VtZW50dWwgcGVudHJ1IGEgcHV0ZWEgw65uY8SDcmNhIHVuIGZpyJlpZXIuXCI+XG4gICAgPCEtLSBUTyBETzogcmVwbGFjZSBpY29uIHdpdGggU1ZHIC0tPlxuICAgIDwhLS0gPG1hdC1pY29uPmNsZWFyPC9tYXQtaWNvbj4gLS0+XG4gICAgPCEtLSBUTyBETzogaTE4biAtLT5cbiAgICA8c3Bhbj5OaWNpdW4gZmnImWllciBhc29jaWF0Ljwvc3Bhbj5cbjwvZGl2PiJdfQ==
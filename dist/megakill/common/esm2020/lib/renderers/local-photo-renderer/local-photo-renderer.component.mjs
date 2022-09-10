import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../local-files.service";
export class LocalPhotoRenderer {
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
LocalPhotoRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalPhotoRenderer, deps: [{ token: i1.LocalFilesService }], target: i0.ɵɵFactoryTarget.Component });
LocalPhotoRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: LocalPhotoRenderer, selector: "megakill-local-photo-renderer", ngImport: i0, template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalPhotoRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-local-photo-renderer', template: "<div color=\"primary\" (click)=\"download()\" *ngIf=\"params.value\" class=\"download\">\n    <!-- TO DO: replace icon with SVG -->\n    <!-- <mat-icon>visibility</mat-icon> -->\n    <!-- TO DO: i18n -->\n    <span>VIZUALIZEAZ\u0102 FOTOGRAFIA</span>\n</div>", styles: ["div.download{font-size:12px;display:flex;place-content:center start;margin-left:-5px;color:var(--primary);border-radius:4px}div.download:hover{cursor:pointer}div.download:visited{color:var(--primary)}div.download mat-icon{transform:scale(.8);margin-top:10px;margin-right:5px;margin-left:-2px}div.no-file{margin-left:-5px;display:flex;place-content:center start}div.no-file mat-icon{margin-top:10px;margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.LocalFilesService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGhvdG8tcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvcmVuZGVyZXJzL2xvY2FsLXBob3RvLXJlbmRlcmVyL2xvY2FsLXBob3RvLXJlbmRlcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL3JlbmRlcmVycy9sb2NhbC1waG90by1yZW5kZXJlci9sb2NhbC1waG90by1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzNDLENBQUM7SUFJSixNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzsrR0FqQlUsa0JBQWtCO21HQUFsQixrQkFBa0IscUVDVC9CLG9RQUtNOzJGRElPLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCB9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcic7XG5pbXBvcnQgeyBMb2NhbEZpbGVzU2VydmljZSB9IGZyb20gJy4uLy4uL2xvY2FsLWZpbGVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZWdha2lsbC1sb2NhbC1waG90by1yZW5kZXJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2NhbC1waG90by1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvY2FsLXBob3RvLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxQaG90b1JlbmRlcmVyIGltcGxlbWVudHMgSUNlbGxSZW5kZXJlckFuZ3VsYXJDb21wICB7XG4gIGNvbnN0cnVjdG9yIChcbiAgICBwcml2YXRlIGxvY2FsRmlsZXNTZXJ2aWNlOiBMb2NhbEZpbGVzU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIHBhcmFtczogYW55O1xuXG4gIGFnSW5pdChwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgcmVmcmVzaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb3dubG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEZpbGVzU2VydmljZS5kb3dubG9hZCh0aGlzLnBhcmFtcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImRvd25sb2FkKClcIiAqbmdJZj1cInBhcmFtcy52YWx1ZVwiIGNsYXNzPVwiZG93bmxvYWRcIj5cbiAgICA8IS0tIFRPIERPOiByZXBsYWNlIGljb24gd2l0aCBTVkcgLS0+XG4gICAgPCEtLSA8bWF0LWljb24+dmlzaWJpbGl0eTwvbWF0LWljb24+IC0tPlxuICAgIDwhLS0gVE8gRE86IGkxOG4gLS0+XG4gICAgPHNwYW4+VklaVUFMSVpFQVrEgiBGT1RPR1JBRklBPC9zcGFuPlxuPC9kaXY+Il19
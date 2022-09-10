import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../../auth.service";
export class CallbackComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.handleAuthCallback();
    }
}
CallbackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CallbackComponent, deps: [{ token: i1.AuthService }], target: i0.ɵɵFactoryTarget.Component });
CallbackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.6", type: CallbackComponent, selector: "megakill-callback", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CallbackComponent, decorators: [{
            type: Component,
            args: [{ selector: 'megakill-callback', template: "" }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVnYWtpbGwvY29tbW9uL3NyYy9saWIvYXV0aC9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9hdXRoL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU1sRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1UsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDOUIsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OEdBUFUsaUJBQWlCO2tHQUFqQixpQkFBaUIseURDUDlCLEVBQUE7MkZET2EsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVnYWtpbGwtY2FsbGJhY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsbGJhY2suY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhbGxiYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmhhbmRsZUF1dGhDYWxsYmFjaygpO1xuICB9XG59IiwiIl19
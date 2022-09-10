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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9hdXRoL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFNbEQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNVLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzlCLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7OzhHQVBVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHlEQ1A5QixFQUFBOzJGRE9hLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vLi4vLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lZ2FraWxsLWNhbGxiYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGxiYWNrLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxsYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5oYW5kbGVBdXRoQ2FsbGJhY2soKTtcbiAgfVxufSIsIiJdfQ==
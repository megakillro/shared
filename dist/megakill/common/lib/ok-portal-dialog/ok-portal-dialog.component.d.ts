import { OnInit, Injector } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OkPortalDialogComponent implements OnInit {
    private injector;
    dialogRef: MatDialogRef<OkPortalDialogComponent>;
    data: any;
    title: string;
    component: ComponentType<any>;
    componentData: null;
    componentPortal: ComponentPortal<any>;
    eventSelectedRow: Subscription;
    constructor(injector: Injector, dialogRef: MatDialogRef<OkPortalDialogComponent>, data: any);
    createInjector(dataToPass: any): PortalInjector;
    ngOnInit(): void;
    onPortalAttached(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OkPortalDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OkPortalDialogComponent, "megakill-ok-portal-dialog", never, {}, {}, never, never, false>;
}

import { OnInit, Injector } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SelectPortalDialogComponent implements OnInit {
    private injector;
    dialogRef: MatDialogRef<SelectPortalDialogComponent>;
    data: any;
    title: string;
    component: ComponentType<any>;
    componentData: null;
    componentPortal: ComponentPortal<any>;
    eventSelectedRow: Subscription;
    selectedRow: any;
    constructor(injector: Injector, dialogRef: MatDialogRef<SelectPortalDialogComponent>, data: any);
    createInjector(dataToPass: any): PortalInjector;
    ngOnInit(): void;
    onPortalAttached(event: any): void;
    getSelectedRowAfterClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectPortalDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectPortalDialogComponent, "megakill-select-portal-dialog", never, {}, {}, never, never, false>;
}

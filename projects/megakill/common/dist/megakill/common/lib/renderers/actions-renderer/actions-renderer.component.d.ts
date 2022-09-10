import { ICellRendererAngularComp } from 'ag-grid-angular';
import { DialogService } from '../../dialog.service';
import * as i0 from "@angular/core";
export declare class ActionsRenderer implements ICellRendererAngularComp {
    private dialogService;
    params: any;
    constructor(dialogService: DialogService);
    agInit(params: any): void;
    edit(): void;
    delete(): void;
    showHistory(): import("@angular/material/dialog").MatDialogRef<import("../../ok-portal-dialog/ok-portal-dialog.component").OkPortalDialogComponent, any>;
    refreshParent(): void;
    refresh(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionsRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionsRenderer, "megakill-actions-renderer", never, {}, {}, never, never, false>;
}

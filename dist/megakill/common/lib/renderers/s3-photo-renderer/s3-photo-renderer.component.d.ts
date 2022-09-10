import { ICellRendererAngularComp } from 'ag-grid-angular';
import { S3Service } from '../../s3.service';
import * as i0 from "@angular/core";
export declare class S3PhotoRenderer implements ICellRendererAngularComp {
    private s3Service;
    constructor(s3Service: S3Service);
    params: any;
    agInit(params: any): void;
    refresh(): boolean;
    download(): Promise<ArrayBuffer | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<S3PhotoRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<S3PhotoRenderer, "megakill-s3-photo-renderer", never, {}, {}, never, never, false>;
}

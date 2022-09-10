import { ICellRendererAngularComp } from 'ag-grid-angular';
import { S3Service } from '../../s3.service';
import * as i0 from "@angular/core";
export declare class S3DownloadRenderer implements ICellRendererAngularComp {
    private s3Service;
    constructor(s3Service: S3Service);
    params: any;
    agInit(params: any): void;
    refresh(): boolean;
    download(): Promise<ArrayBuffer | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<S3DownloadRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<S3DownloadRenderer, "appointments-solution-s3-download-renderer", never, {}, {}, never, never, false>;
}

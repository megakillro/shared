import { ICellRendererAngularComp } from 'ag-grid-angular';
import { LocalFilesService } from '../../local-files.service';
import * as i0 from "@angular/core";
export declare class LocalDownloadRenderer implements ICellRendererAngularComp {
    private localFilesService;
    constructor(localFilesService: LocalFilesService);
    params: any;
    agInit(params: any): void;
    refresh(): boolean;
    download(): Promise<ArrayBuffer | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalDownloadRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocalDownloadRenderer, "appointments-solution-local-download-renderer", never, {}, {}, never, never, false>;
}

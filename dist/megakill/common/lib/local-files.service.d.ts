import { HttpClient } from '@angular/common/http';
import { MegakillCommonModuleConfig } from './config';
import * as i0 from "@angular/core";
export declare class LocalFilesService {
    private http;
    baseUrl: string;
    constructor(http: HttpClient, config?: MegakillCommonModuleConfig);
    upload(formData: any): Promise<Object | undefined>;
    download(filePath: string): Promise<ArrayBuffer | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalFilesService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalFilesService>;
}

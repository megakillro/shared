import { HttpClient } from '@angular/common/http';
import { MegakillCommonModuleConfig } from './config';
import * as i0 from "@angular/core";
export declare class S3Service {
    private http;
    baseUrl: string;
    constructor(http: HttpClient, config?: MegakillCommonModuleConfig);
    download(link: string): Promise<ArrayBuffer | undefined>;
    upload(formData: FormData): Promise<Object | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<S3Service, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<S3Service>;
}

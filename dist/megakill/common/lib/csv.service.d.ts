import { MegakillCommonModuleConfig } from './config';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class CsvService {
    private http;
    baseUrl: string;
    constructor(http: HttpClient, config?: MegakillCommonModuleConfig);
    csvToXlsx(csv?: any): Promise<ArrayBuffer | undefined>;
    csvToHtml(csv?: any): Promise<ArrayBuffer | undefined>;
    csvToPdf(csv?: any): Promise<ArrayBuffer | undefined>;
    csvToJson(csv?: any): Promise<ArrayBuffer | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CsvService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CsvService>;
}

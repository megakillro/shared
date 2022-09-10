import { getBaseUrl } from './config';
import { Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config";
export class CsvService {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    csvToXlsx(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-xlsx', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToHtml(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-html', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToPdf(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-pdf', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
    csvToJson(csv = {}) {
        return this.http.post(this.baseUrl + 'csv-to-json', { csv }, { responseType: 'arraybuffer' }).toPromise();
    }
}
CsvService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, deps: [{ token: i1.HttpClient }, { token: i2.MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
CsvService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: CsvService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MegakillCommonModuleConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWdha2lsbC9jb21tb24vc3JjL2xpYi9jc3Yuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUE4QixNQUFNLFVBQVUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU9yRCxNQUFNLE9BQU8sVUFBVTtJQUd0QixZQUNTLElBQWdCLEVBQ1osTUFBbUM7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUd4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUM7SUFDckQsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0csQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0csQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUcsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0csQ0FBQzs7dUdBeEJXLFVBQVU7MkdBQVYsVUFBVSxjQUhWLE1BQU07MkZBR04sVUFBVTtrQkFKdEIsVUFBVTttQkFBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OzBCQU9FLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCYXNlVXJsLCBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENzdlNlcnZpY2Uge1xuXHRiYXNlVXJsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcblx0XHRAT3B0aW9uYWwoKSBjb25maWc/OiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZ1xuXHQpIHtcblx0XHR0aGlzLmJhc2VVcmwgPSBnZXRCYXNlVXJsKGNvbmZpZykgKyAnL2xvY2FsLWZpbGVzLyc7XG5cdH1cblxuXHRjc3ZUb1hsc3goY3N2OiBhbnkgPSB7fSkge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnY3N2LXRvLXhsc3gnLCB7IGNzdiB9LCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS50b1Byb21pc2UoKTtcblx0fVxuXG5cdGNzdlRvSHRtbChjc3Y6IGFueSA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdjc3YtdG8taHRtbCcsIHsgY3N2IH0sIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnRvUHJvbWlzZSgpO1xuXHR9XG5cblx0Y3N2VG9QZGYoY3N2OiBhbnkgPSB7fSkge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnY3N2LXRvLXBkZicsIHsgY3N2IH0sIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnRvUHJvbWlzZSgpO1xuXHR9XG5cblx0Y3N2VG9Kc29uKGNzdjogYW55ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2Nzdi10by1qc29uJywgeyBjc3YgfSwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkudG9Qcm9taXNlKCk7XG5cdH1cbn0iXX0=
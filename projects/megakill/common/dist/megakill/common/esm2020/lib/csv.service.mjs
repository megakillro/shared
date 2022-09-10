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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2Nzdi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sVUFBVSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3JELE1BQU0sT0FBTyxVQUFVO0lBR3RCLFlBQ1MsSUFBZ0IsRUFDWixNQUFtQztRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzRyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzRyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVcsRUFBRTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxRyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzRyxDQUFDOzt1R0F4QlcsVUFBVTsyR0FBVixVQUFVLGNBSFYsTUFBTTsyRkFHTixVQUFVO2tCQUp0QixVQUFVO21CQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7MEJBT0UsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJhc2VVcmwsIE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ3N2U2VydmljZSB7XG5cdGJhc2VVcmw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuXHRcdEBPcHRpb25hbCgpIGNvbmZpZz86IE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnXG5cdCkge1xuXHRcdHRoaXMuYmFzZVVybCA9IGdldEJhc2VVcmwoY29uZmlnKSArICcvbG9jYWwtZmlsZXMvJztcblx0fVxuXG5cdGNzdlRvWGxzeChjc3Y6IGFueSA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdjc3YtdG8teGxzeCcsIHsgY3N2IH0sIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnRvUHJvbWlzZSgpO1xuXHR9XG5cblx0Y3N2VG9IdG1sKGNzdjogYW55ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2Nzdi10by1odG1sJywgeyBjc3YgfSwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkudG9Qcm9taXNlKCk7XG5cdH1cblxuXHRjc3ZUb1BkZihjc3Y6IGFueSA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdjc3YtdG8tcGRmJywgeyBjc3YgfSwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkudG9Qcm9taXNlKCk7XG5cdH1cblxuXHRjc3ZUb0pzb24oY3N2OiBhbnkgPSB7fSkge1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnY3N2LXRvLWpzb24nLCB7IGNzdiB9LCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS50b1Byb21pc2UoKTtcblx0fVxufSJdfQ==
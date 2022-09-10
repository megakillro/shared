import { Injectable, Optional } from '@angular/core';
import { getBaseUrl } from './config';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config";
export class LocalFilesService {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    upload(formData) {
        return this.http.post(this.baseUrl + 'upload', formData).toPromise();
    }
    download(filePath) {
        const linkParts = filePath.split('/');
        const filename = linkParts[linkParts.length - 1];
        return this.http.get(this.baseUrl + 'download?filePath=' + filePath, { responseType: 'arraybuffer' }).toPromise().then((res) => {
            const arrayBuffer = res;
            const blob = new Blob([arrayBuffer]);
            saveAs(blob, filename);
            return res;
        });
    }
}
LocalFilesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, deps: [{ token: i1.HttpClient }, { token: i2.MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LocalFilesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: LocalFilesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MegakillCommonModuleConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbG9jYWwtZmlsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsVUFBVSxFQUE4QixNQUFNLFVBQVUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBS3BDLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFDVSxJQUFnQixFQUNaLE1BQW1DO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFHeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDO0lBQ3RELENBQUM7SUFFRCxNQUFNLENBQUMsUUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0I7UUFDdkIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEdBQUcsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0gsTUFBTSxXQUFXLEdBQUcsR0FBa0IsQ0FBQztZQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUN0QixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OEdBeEJVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgZ2V0QmFzZVVybCwgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxGaWxlc1NlcnZpY2Uge1xuICBiYXNlVXJsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBjb25maWc/OiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBnZXRCYXNlVXJsKGNvbmZpZykgKyAnL2xvY2FsLWZpbGVzLyc7XG4gIH1cblxuICB1cGxvYWQoZm9ybURhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXBsb2FkJywgZm9ybURhdGEpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZG93bmxvYWQoZmlsZVBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGxpbmtQYXJ0cyA9IGZpbGVQYXRoLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBsaW5rUGFydHNbbGlua1BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIFxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdkb3dubG9hZD9maWxlUGF0aD0nICsgZmlsZVBhdGgsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnRvUHJvbWlzZSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSByZXMgYXMgQXJyYXlCdWZmZXI7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSk7XG4gICAgICBzYXZlQXMoYmxvYiwgZmlsZW5hbWUpXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
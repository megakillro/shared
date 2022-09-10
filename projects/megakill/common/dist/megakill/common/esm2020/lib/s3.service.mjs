import { Injectable, Optional } from '@angular/core';
import { saveAs } from 'file-saver';
import { getBaseUrl } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config";
export class S3Service {
    constructor(http, config) {
        this.http = http;
        this.baseUrl = getBaseUrl(config) + '/local-files/';
    }
    async download(link) {
        const linkParts = link.split('/');
        const filename = linkParts[linkParts.length - 1];
        return this.http.get(this.baseUrl + 'download?link=' + link, { responseType: 'arraybuffer' }).toPromise().then((res) => {
            const arrayBuffer = res;
            const blob = new Blob([arrayBuffer]);
            saveAs(blob, filename);
            return res;
        });
    }
    async upload(formData) {
        return this.http.post(this.baseUrl + 'upload', formData).toPromise();
    }
}
S3Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, deps: [{ token: i1.HttpClient }, { token: i2.MegakillCommonModuleConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
S3Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.6", ngImport: i0, type: S3Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MegakillCommonModuleConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvczMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQThCLE1BQU0sVUFBVSxDQUFDOzs7O0FBS2xFLE1BQU0sT0FBTyxTQUFTO0lBRXBCLFlBQ1UsSUFBZ0IsRUFDWixNQUFtQztRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFZO1FBQ3pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixHQUFHLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JILE1BQU0sV0FBVyxHQUFHLEdBQWtCLENBQUM7WUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDdEIsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7c0dBdkJVLFNBQVM7MEdBQVQsU0FBUyxjQUZSLE1BQU07MkZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUtJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgZ2V0QmFzZVVybCwgTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFMzU2VydmljZSB7XG4gIGJhc2VVcmw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBjb25maWc/OiBNZWdha2lsbENvbW1vbk1vZHVsZUNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBnZXRCYXNlVXJsKGNvbmZpZykgKyAnL2xvY2FsLWZpbGVzLyc7XG4gIH1cblxuICBhc3luYyBkb3dubG9hZChsaW5rOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaW5rUGFydHMgPSBsaW5rLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBsaW5rUGFydHNbbGlua1BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIFxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdkb3dubG9hZD9saW5rPScgKyBsaW5rLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS50b1Byb21pc2UoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gcmVzIGFzIEFycmF5QnVmZmVyO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pO1xuICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwbG9hZChmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsIGZvcm1EYXRhKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
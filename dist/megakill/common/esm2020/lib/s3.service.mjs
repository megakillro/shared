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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL3MzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUE4QixNQUFNLFVBQVUsQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sU0FBUztJQUVwQixZQUNVLElBQWdCLEVBQ1osTUFBbUM7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUd4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUM7SUFDdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNySCxNQUFNLFdBQVcsR0FBRyxHQUFrQixDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7O3NHQXZCVSxTQUFTOzBHQUFULFNBQVMsY0FGUixNQUFNOzJGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFLSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IGdldEJhc2VVcmwsIE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTM1NlcnZpY2Uge1xuICBiYXNlVXJsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgY29uZmlnPzogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWdcbiAgKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gZ2V0QmFzZVVybChjb25maWcpICsgJy9sb2NhbC1maWxlcy8nO1xuICB9XG5cbiAgYXN5bmMgZG93bmxvYWQobGluazogc3RyaW5nKSB7XG4gICAgY29uc3QgbGlua1BhcnRzID0gbGluay5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gbGlua1BhcnRzW2xpbmtQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnZG93bmxvYWQ/bGluaz0nICsgbGluaywgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkudG9Qcm9taXNlKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHJlcyBhcyBBcnJheUJ1ZmZlcjtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJdKTtcbiAgICAgIHNhdmVBcyhibG9iLCBmaWxlbmFtZSlcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cGxvYWQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICd1cGxvYWQnLCBmb3JtRGF0YSkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==
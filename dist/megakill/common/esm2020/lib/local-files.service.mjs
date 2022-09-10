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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZmlsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZ2FraWxsL2NvbW1vbi9zcmMvbGliL2xvY2FsLWZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBOEIsTUFBTSxVQUFVLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUtwQyxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQ1UsSUFBZ0IsRUFDWixNQUFtQztRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWdCO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixHQUFHLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzdILE1BQU0sV0FBVyxHQUFHLEdBQWtCLENBQUM7WUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDdEIsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhHQXhCVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGdldEJhc2VVcmwsIE1lZ2FraWxsQ29tbW9uTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsRmlsZXNTZXJ2aWNlIHtcbiAgYmFzZVVybDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgY29uZmlnPzogTWVnYWtpbGxDb21tb25Nb2R1bGVDb25maWdcbiAgKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gZ2V0QmFzZVVybChjb25maWcpICsgJy9sb2NhbC1maWxlcy8nO1xuICB9XG5cbiAgdXBsb2FkKGZvcm1EYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ3VwbG9hZCcsIGZvcm1EYXRhKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGRvd25sb2FkKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaW5rUGFydHMgPSBmaWxlUGF0aC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gbGlua1BhcnRzW2xpbmtQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnZG93bmxvYWQ/ZmlsZVBhdGg9JyArIGZpbGVQYXRoLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS50b1Byb21pc2UoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gcmVzIGFzIEFycmF5QnVmZmVyO1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pO1xuICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxufVxuIl19
import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl, MegakillCommonModuleConfig } from './config';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class LocalFilesService {
  baseUrl;

  constructor(
    private http: HttpClient,
    @Optional() config?: MegakillCommonModuleConfig
  ) {
    this.baseUrl = getBaseUrl(config) + '/local-files/';
  }

  upload(formData: any) {
    return this.http.post(this.baseUrl + 'upload', formData).toPromise();
  }

  download(filePath: string) {
    const linkParts = filePath.split('/');
    const filename = linkParts[linkParts.length - 1];
    return this.http.get(this.baseUrl + 'download?filePath=' + filePath, { responseType: 'arraybuffer' }).toPromise().then((res) => {
      const arrayBuffer: ArrayBuffer = res as ArrayBuffer;
      const blob = new Blob([arrayBuffer]);
      saveAs(blob, filename)
      return res;
    })
  }
}

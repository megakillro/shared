import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { getBaseUrl, MegakillCommonModuleConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  baseUrl;
  constructor(
    private http: HttpClient,
    @Optional() config?: MegakillCommonModuleConfig
  ) {
    this.baseUrl = getBaseUrl(config) + '/local-files/';
  }

  async download(link: string) {
    const linkParts = link.split('/');
    const filename = linkParts[linkParts.length - 1];
    return this.http.get(this.baseUrl + 'download?link=' + link, { responseType: 'arraybuffer' }).toPromise().then((res) => {
      const arrayBuffer = res as ArrayBuffer;
      const blob = new Blob([arrayBuffer]);
      saveAs(blob, filename)
      return res;
    });
  }

  async upload(formData: FormData) {
    return this.http.post(this.baseUrl + 'upload', formData).toPromise();
  }
}

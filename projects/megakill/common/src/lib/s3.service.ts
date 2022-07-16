import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl +
  '/s3/';

  async download(link: string) {
    const linkParts = link.split('/');
    const filename = linkParts[linkParts.length - 1];
    return this.http.get(this.baseUrl + 'download?link=' + link, { responseType: 'arraybuffer' }).toPromise().then((res) => {
      const blob = new Blob([res]);
      saveAs(blob, filename)
      return res;
    });
  }

  async upload(formData: FormData) {
    return this.http.post(this.baseUrl + 'upload', formData).toPromise();
  }
}

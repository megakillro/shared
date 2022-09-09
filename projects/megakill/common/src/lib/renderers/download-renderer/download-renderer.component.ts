import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { S3Service } from '../../s3.service';

@Component({
  selector: 'megakill-download-renderer',
  templateUrl: './download-renderer.component.html',
  styleUrls: ['./download-renderer.component.scss']
})
export class DownloadRenderer implements ICellRendererAngularComp  {
  constructor (
    private s3Service: S3Service
  ) {}

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  download() {
    return this.s3Service.download(this.params.value);
  }
}

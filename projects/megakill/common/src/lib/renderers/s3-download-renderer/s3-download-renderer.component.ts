import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { S3Service } from '../s3.service';

@Component({
  selector: 'appointments-solution-s3-download-renderer',
  templateUrl: './s3-download-renderer.component.html',
  styleUrls: ['./s3-download-renderer.component.scss']
})
export class S3DownloadRenderer implements ICellRendererAngularComp  {
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

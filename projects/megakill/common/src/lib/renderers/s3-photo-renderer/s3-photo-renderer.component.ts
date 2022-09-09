import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { S3Service } from '../../s3.service';

@Component({
  selector: 'megakill-s3-photo-renderer',
  templateUrl: './s3-photo-renderer.component.html',
  styleUrls: ['./s3-photo-renderer.component.scss']
})
export class S3PhotoRenderer implements ICellRendererAngularComp  {
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

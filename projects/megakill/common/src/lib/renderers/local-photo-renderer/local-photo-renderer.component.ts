import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { LocalFilesService } from '../../local-files.service';

@Component({
  selector: 'megakill-local-photo-renderer',
  templateUrl: './local-photo-renderer.component.html',
  styleUrls: ['./local-photo-renderer.component.scss']
})
export class LocalPhotoRenderer implements ICellRendererAngularComp  {
  constructor (
    private localFilesService: LocalFilesService
  ) {}

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  download() {
    return this.localFilesService.download(this.params.value);
  }
}

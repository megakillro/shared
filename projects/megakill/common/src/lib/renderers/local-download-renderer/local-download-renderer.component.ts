import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { LocalFilesService } from '../local-files.service';

@Component({
  selector: 'appointments-solution-local-download-renderer',
  templateUrl: './local-download-renderer.component.html',
  styleUrls: ['./local-download-renderer.component.scss']
})
export class LocalDownloadRenderer implements ICellRendererAngularComp  {
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

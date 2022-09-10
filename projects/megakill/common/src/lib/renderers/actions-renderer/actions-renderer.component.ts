import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'megakill-actions-renderer',
  templateUrl: './actions-renderer.component.html'
})

export class ActionsRenderer implements ICellRendererAngularComp {
  public params: any;

  constructor(private dialogService: DialogService) { }

  agInit(params: any): void {
    this.params = params;
  }

  public edit() {
    this.params.context.componentParent.edit(this.params.data);
  }

  public delete() {
    this.params.context.componentParent.delete(this.params.data);
  }

  showHistory() {
    const dialogRef = this.dialogService.openOkPortalDialog({
      title: 'Istoric',
      component: this.params.context.componentParent.historyDialogComponentType,
      componentData: {
        id: this.params.data._id
      }
    });

    return dialogRef;
  }

  refreshParent() {
    this.params.context.componentParent.getData();
  }

  refresh(): boolean {
    return false;
  }
}

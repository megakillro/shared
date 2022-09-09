import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'megakill-actions-renderer',
  templateUrl: './actions-renderer.component.html',
  styleUrls: ['./actions-renderer.component.scss']
})

export class ActionsRenderer implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public edit() {
    this.params.context.componentParent.edit(this.params.data);
  }

  public delete() {
    this.params.context.componentParent.delete(this.params.data);
  }

  refreshParent() {
    this.params.context.componentParent.getData();
  }

  refresh(): boolean {
    return false;
  }
}

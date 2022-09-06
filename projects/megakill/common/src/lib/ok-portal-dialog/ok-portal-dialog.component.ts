import { Component, OnInit, Inject, InjectionToken, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { CONTAINER_DATA } from '../injections-tokens/container-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'megakill-ok-portal-dialog',
  templateUrl: './ok-portal-dialog.component.html'
})

export class OkPortalDialogComponent implements OnInit {
  title = '';
  component = null;
  componentData = null;
  componentPortal: ComponentPortal<any>;
  eventSelectedRow: Subscription;

  constructor(
    private injector: Injector,
    public dialogRef: MatDialogRef<OkPortalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data && data.title) {
      this.title = data.title;
    }

    if (!data || !data.component) {
      throw new Error('OkDialog: data.component is undefined');
    }

    this.component = data.component;

    if (!data.componentData) {
      throw new Error('OkDialog: data.component.componentData is undefined');
    }

    this.componentData = data.componentData;

    this.componentPortal = new ComponentPortal(
      this.component,
      null,
      this.createInjector(this.componentData)
    );
  }

  createInjector(dataToPass: any): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

  ngOnInit() { }

  onPortalAttached(event: any) {
    console.log(event.instance.selectedRow) 
    console.log(event)
    this.eventSelectedRow = event.instance.selectedRow.subscribe(el => {
      console.log(el)
    });
  }
}

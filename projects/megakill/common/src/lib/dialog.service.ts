import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SelectPortalDialogComponent } from './select-portal-dialog/select-portal-dialog.component';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { OkPortalDialogComponent } from './ok-portal-dialog/ok-portal-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openOkDialog(data: any) {
    return this.dialog.open(OkDialogComponent, { data });
  }

  openOkPortalDialog(data: any) {
    return this.dialog.open(OkPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
  }

  openSelectPortalDialog(data: any) {
    return this.dialog.open(SelectPortalDialogComponent, { data, width: '90vw', maxWidth: '90vw', height: '80vh' });
  }
}

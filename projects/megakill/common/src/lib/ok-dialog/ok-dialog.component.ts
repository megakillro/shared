import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'megakill-ok-dialog',
  templateUrl: './ok-dialog.component.html'
})

export class OkDialogComponent implements OnInit {
  title = '';
  message = '';

  constructor(
    public dialogRef: MatDialogRef<OkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data && data.title) {
      this.title = data.title;
    }

    if (data && data.message) {
      this.message = data.message;
    }
  }

  ngOnInit() { }
}

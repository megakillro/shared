import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'megakill-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})

export class ConfirmationDialogComponent implements OnInit {
  // TO DO: i18n
  message = 'Sunteți sigur că doriți să efectuați această acțiune?';

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if (data && data.message) {
        this.message = data.message;
      }
    }

  ngOnInit() {}
}

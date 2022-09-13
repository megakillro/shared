import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'megakill-confirmation-async-dialog',
  templateUrl: './confirmation-async-dialog.component.html',
  styleUrls: ['./confirmation-async-dialog.component.scss']
})
export class ConfirmationAsyncDialogComponent implements OnInit {
  fn: Function = () => {};
  loading = false;
  // TO DO: i18n
  message = 'Sunteți sigur că doriți să efectuați această acțiune?';
  // TO DO: i18n
  errorMessage = 'Eroare: operațiunea nu a putut fi efectuată!';
  // TO DO: i18n
  successMessage = 'Operațiunea a fost efectuată cu succes!';

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ConfirmationAsyncDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if (data && data.message) {
        this.message = data.message;
      }

      if (data && data.errorMessage) {
        this.errorMessage = data.errorMessage;
      }

      if (data && data.successMessage) {
        this.successMessage = data.successMessage;
      }

      if (data && data.fn) {
        this.fn = data.fn;
      } else {
        console.error(`No fn provided for ConfirmationAsyncDialogComponent with message "${this.message}"`);
      }
    }

    confirm() {
      this.loading = true;
      this.fn().then((result: any) => {
        this.loading = false;
        this.dialogRef.close(result);
        this.snackBar.open(this.successMessage, 'OK', {
          duration: 3000
        });
      }).catch((err: any) => {
        this.loading = false;
        this.dialogRef.close({ error: err });
        this.snackBar.open(this.errorMessage, 'OK', {
          duration: 3000
        });
      });
    }

    reject() {
      this.dialogRef.close();
    }

    ngOnInit() {}
}

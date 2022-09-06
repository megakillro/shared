import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'megakill-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.handleAuthCallback();
  }
}
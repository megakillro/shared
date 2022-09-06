import { Component, Inject, OnInit } from '@angular/core';
import {  MegakillCommonModuleConfig } from '../../config';

@Component({
  selector: 'megakill-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {
  constructor(
    @Inject('MegakillCommonModuleConfig') private config: MegakillCommonModuleConfig
  ) { }

  ngOnInit() {
    this.config.AuthService.handleAuthCallback();
  }
}
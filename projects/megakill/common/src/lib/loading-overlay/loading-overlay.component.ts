import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'megakill-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {
  @Input()
  icon = '';
  
  @Input()
  message = 'Loading...'

  @Input()
  progressBarMode = 'buffer';

  constructor() { }

  ngOnInit(): void {
  }

}

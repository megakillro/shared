import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadRenderer } from './download-renderer.component';

describe('DownloadRendererComponent', () => {
  let component: DownloadRenderer;
  let fixture: ComponentFixture<DownloadRenderer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadRenderer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

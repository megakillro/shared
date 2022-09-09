import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3DownloadRenderer } from './s3-download-renderer.component';

describe('S3DownloadRendererComponent', () => {
  let component: S3DownloadRenderer;
  let fixture: ComponentFixture<S3DownloadRenderer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3DownloadRenderer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3DownloadRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

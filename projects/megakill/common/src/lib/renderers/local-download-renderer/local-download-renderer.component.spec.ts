import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDownloadRenderer } from './local-download-renderer.component';

describe('LocalDownloadRendererComponent', () => {
  let component: LocalDownloadRenderer;
  let fixture: ComponentFixture<LocalDownloadRenderer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDownloadRenderer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDownloadRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

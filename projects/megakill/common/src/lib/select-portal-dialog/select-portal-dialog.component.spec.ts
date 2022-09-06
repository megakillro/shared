import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPortalDialogComponent } from './select-portal-dialog.component';

describe('SelectPortalDialogComponent', () => {
  let component: SelectPortalDialogComponent;
  let fixture: ComponentFixture<SelectPortalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPortalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPortalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

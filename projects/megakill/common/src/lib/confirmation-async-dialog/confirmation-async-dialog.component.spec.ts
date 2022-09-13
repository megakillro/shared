import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAsyncDialogComponent } from './confirmation-async-dialog.component';

describe('ConfirmationAsyncDialogComponent', () => {
  let component: ConfirmationAsyncDialogComponent;
  let fixture: ComponentFixture<ConfirmationAsyncDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationAsyncDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationAsyncDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewListDialogComponent } from './create-new-list-dialog.component';

describe('CreateNewListDialogComponent', () => {
  let component: CreateNewListDialogComponent;
  let fixture: ComponentFixture<CreateNewListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

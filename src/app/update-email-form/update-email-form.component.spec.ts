import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmailFormComponent } from './update-email-form.component';

describe('UpdateEmailFormComponent', () => {
  let component: UpdateEmailFormComponent;
  let fixture: ComponentFixture<UpdateEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

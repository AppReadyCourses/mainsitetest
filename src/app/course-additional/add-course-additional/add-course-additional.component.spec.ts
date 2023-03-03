import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseAdditionalComponent } from './add-course-additional.component';

describe('AddCourseAdditionalComponent', () => {
  let component: AddCourseAdditionalComponent;
  let fixture: ComponentFixture<AddCourseAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseAdditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

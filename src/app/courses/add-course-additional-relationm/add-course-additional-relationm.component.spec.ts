import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseAdditionalRelationmComponent } from './add-course-additional-relationm.component';

describe('AddCourseAdditionalRelationmComponent', () => {
  let component: AddCourseAdditionalRelationmComponent;
  let fixture: ComponentFixture<AddCourseAdditionalRelationmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseAdditionalRelationmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseAdditionalRelationmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

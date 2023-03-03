import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseAdditionalComponent } from './delete-course-additional.component';

describe('DeleteCourseAdditionalComponent', () => {
  let component: DeleteCourseAdditionalComponent;
  let fixture: ComponentFixture<DeleteCourseAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCourseAdditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

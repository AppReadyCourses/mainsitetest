import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaidCoursesDComponent } from './my-paid-courses-d.component';

describe('MyPaidCoursesDComponent', () => {
  let component: MyPaidCoursesDComponent;
  let fixture: ComponentFixture<MyPaidCoursesDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPaidCoursesDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaidCoursesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

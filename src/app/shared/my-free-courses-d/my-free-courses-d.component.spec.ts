import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFreeCoursesDComponent } from './my-free-courses-d.component';

describe('MyFreeCoursesDComponent', () => {
  let component: MyFreeCoursesDComponent;
  let fixture: ComponentFixture<MyFreeCoursesDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFreeCoursesDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFreeCoursesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

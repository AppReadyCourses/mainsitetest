import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailsSectionComponent } from './courses-details-section.component';

describe('CoursesDetailsSectionComponent', () => {
  let component: CoursesDetailsSectionComponent;
  let fixture: ComponentFixture<CoursesDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDetailsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

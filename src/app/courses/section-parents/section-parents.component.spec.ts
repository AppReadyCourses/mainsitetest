import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionParentsComponent } from './section-parents.component';

describe('SectionParentsComponent', () => {
  let component: SectionParentsComponent;
  let fixture: ComponentFixture<SectionParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

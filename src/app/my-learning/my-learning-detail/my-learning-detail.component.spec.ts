import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningDetailComponent } from './my-learning-detail.component';

describe('MyLearningDetailComponent', () => {
  let component: MyLearningDetailComponent;
  let fixture: ComponentFixture<MyLearningDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearningDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

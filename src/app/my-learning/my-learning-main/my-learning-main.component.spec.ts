import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningMainComponent } from './my-learning-main.component';

describe('MyLearningMainComponent', () => {
  let component: MyLearningMainComponent;
  let fixture: ComponentFixture<MyLearningMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLearningMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearningMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

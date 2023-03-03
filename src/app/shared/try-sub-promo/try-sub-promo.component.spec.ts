import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrySubPromoComponent } from './try-sub-promo.component';

describe('TrySubPromoComponent', () => {
  let component: TrySubPromoComponent;
  let fixture: ComponentFixture<TrySubPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrySubPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrySubPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

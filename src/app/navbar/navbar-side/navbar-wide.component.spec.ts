import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWideComponent } from './navbar-wide.component';

describe('NavbarSideComponent', () => {
  let component: NavbarWideComponent;
  let fixture: ComponentFixture<NavbarWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarWideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

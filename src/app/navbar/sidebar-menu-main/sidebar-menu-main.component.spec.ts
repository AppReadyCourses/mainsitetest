import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuMainComponent } from './sidebar-menu-main.component';

describe('SidebarMenuMainComponent', () => {
  let component: SidebarMenuMainComponent;
  let fixture: ComponentFixture<SidebarMenuMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMenuMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionItemListsComponent } from './section-item-lists.component';

describe('SectionItemListsComponent', () => {
  let component: SectionItemListsComponent;
  let fixture: ComponentFixture<SectionItemListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionItemListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionItemListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

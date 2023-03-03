import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleControlPanelComponent } from './section-title-control-panel.component';

describe('SectionTitleControlPanelComponent', () => {
  let component: SectionTitleControlPanelComponent;
  let fixture: ComponentFixture<SectionTitleControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTitleControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTitleControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

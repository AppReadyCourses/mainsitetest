import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionControlPanelComponent } from './section-control-panel.component';

describe('SectionControlPanelComponent', () => {
  let component: SectionControlPanelComponent;
  let fixture: ComponentFixture<SectionControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

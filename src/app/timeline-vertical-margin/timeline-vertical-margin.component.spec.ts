import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineVerticalMarginComponent } from './timeline-vertical-margin.component';

describe('TimelineVerticalMarginComponent', () => {
  let component: TimelineVerticalMarginComponent;
  let fixture: ComponentFixture<TimelineVerticalMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineVerticalMarginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineVerticalMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

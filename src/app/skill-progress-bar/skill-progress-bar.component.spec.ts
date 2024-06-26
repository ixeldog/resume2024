import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProgressBarComponent } from './skill-progress-bar.component';

describe('SkillProgressBarComponent', () => {
  let component: SkillProgressBarComponent;
  let fixture: ComponentFixture<SkillProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

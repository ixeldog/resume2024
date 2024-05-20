import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillProgressBarComponent } from '../skill-progress-bar/skill-progress-bar.component';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [CommonModule, SkillProgressBarComponent],
  templateUrl: './skill-group.component.html',
  styleUrl: './skill-group.component.scss'
})
export class SkillGroupComponent {
  @Input()
  Skills:Skill[];

  constructor() {
    this.Skills = [];
  }
}

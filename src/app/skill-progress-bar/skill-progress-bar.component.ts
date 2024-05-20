import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-progress-bar.component.html',
  styleUrl: './skill-progress-bar.component.scss'
})
export class SkillProgressBarComponent {

  @Input()
  Skill:Skill;

  @Input()
  ColorClass:string;

  constructor() {
    this.Skill = new Skill();
    this.ColorClass = "";
  }
}

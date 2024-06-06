import { Component, Input, SimpleChanges } from '@angular/core';
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

  static ColorClassPrefix:string = "progress-bar-";
  ColorClass:string;

  constructor() {
    this.Skill = new Skill();
    this.ColorClass = SkillProgressBarComponent.ColorClassPrefix;
  }

  ngOnChanges(changes:SimpleChanges) {
    //either 1, 2, or 3 (for red, green blue)
    let colorThird:number = Math.floor(this.Skill.Percent / 33);

    //red
    if (colorThird == 0) {
      this.ColorClass += "3";
    }
    //green
    else if (colorThird == 1) {
      this.ColorClass += "1";
    }
    //blue - 2 for 66-98%, 3 for 99 and 100%
    else if (colorThird >= 2) {
      this.ColorClass += "2";
    }
  }
}

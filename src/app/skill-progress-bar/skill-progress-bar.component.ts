import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-progress-bar.component.html',
  styleUrl: './skill-progress-bar.component.scss'
})
export class SkillProgressBarComponent {
  @Input()
  Percent:number;

  @Input()
  Label:string;

  @Input()
  ColorClass:string;

  constructor() {
    this.Percent = 0;
    this.Label = "";
    this.ColorClass = "";
  }

  get PercentString(): string {
    return this.Label + "%";
  }
}

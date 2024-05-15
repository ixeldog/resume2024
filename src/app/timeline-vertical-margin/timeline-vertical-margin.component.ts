import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-vertical-margin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-vertical-margin.component.html',
  styleUrl: './timeline-vertical-margin.component.scss'
})
export class TimelineVerticalMarginComponent {
  @Input()
  TopLevelModifierClass:string;

  constructor() {
    this.TopLevelModifierClass = "";
  }
}

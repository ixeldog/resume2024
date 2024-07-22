import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-item.component.html',
  styleUrl: './section-item.component.scss'
})
export class SectionItemComponent {
  @Input()
  TimelineClassType:string;

  @Input()
  AddExtraVerticalSpace:boolean;

  @Input()
  Subtitle:String;

  @Input()
  LinkUrl:string;

  constructor() {
    this.TimelineClassType = "";
    this.Subtitle = "";
    this.AddExtraVerticalSpace = false;
    this.LinkUrl = "";
  }
}

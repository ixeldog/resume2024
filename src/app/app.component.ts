import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TimelineVerticalMarginComponent } from './timeline-vertical-margin/timeline-vertical-margin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionItemComponent, SectionTitleComponent, TimelineVerticalMarginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume20242';
}

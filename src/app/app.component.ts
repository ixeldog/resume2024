import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TimelineVerticalMarginComponent } from './timeline-vertical-margin/timeline-vertical-margin.component';
import { SkillProgressBarComponent } from './skill-progress-bar/skill-progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SectionItemComponent,
    SectionTitleComponent,
    TimelineVerticalMarginComponent,
    SkillProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume20242';
}

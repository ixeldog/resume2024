import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TimelineVerticalMarginComponent } from './timeline-vertical-margin/timeline-vertical-margin.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { Skill } from './skill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SectionItemComponent,
    SectionTitleComponent,
    TimelineVerticalMarginComponent,
    SkillGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume2024';

  Skills:Skill[] = [
    {'Percent': 70, 'Label':'Communication'},
    {'Percent': 90, 'Label':'Leadership'},
    {'Percent': 85, 'Label':'Confidence'},

    {'Percent': 85, 'Label':'Adobe Photoshop'},
    {'Percent': 90, 'Label':'Adobe Illustrator'},
    {'Percent': 40, 'Label':'Adobe Fireworks'},

    {'Percent': 90, 'Label':'HTML5 / CSS3'},
    {'Percent': 60, 'Label':'Javascript'},
    {'Percent': 40, 'Label':'PHP'},
  ];
}

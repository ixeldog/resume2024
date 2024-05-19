import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SectionItemComponent } from './section-item/section-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TimelineVerticalMarginComponent } from './timeline-vertical-margin/timeline-vertical-margin.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { Skill } from './skill';
import { SkillsService } from './skills.service';

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
  SkillsService:SkillsService;
  Skills:Skill[];

  constructor() {
    this.SkillsService = new SkillsService();
    this.Skills = [];
  }

  ngOnInit() {
    this.SkillsService.getSkillsAsync()
      .then((skills:Skill[]) => {
        this.Skills = skills;
      })
  }

}

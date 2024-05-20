import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SectionItemComponent } from './section-item/section-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { TimelineVerticalMarginComponent } from './timeline-vertical-margin/timeline-vertical-margin.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { Skill } from './skill';
import { SkillsService } from './skills.service';

import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    SectionItemComponent,
    SectionTitleComponent,
    TimelineVerticalMarginComponent,
    SkillGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]

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
        setTimeout(() => {
          this.heightFix();
        }, 0)
      })
  }

  //code copied from main.js. Has to be rerun after data is loaded and Sections are shown
  heightFix():void {
    console.warn("heightfix");
    $( ".full-height" ).each(function(i, e) {
      var $stretch = $(e);
      $stretch.css({ height: $stretch.closest('.line').find('.content-wrap').outerHeight() });
    });  
  }

}

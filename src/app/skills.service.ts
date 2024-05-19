import { Injectable } from '@angular/core';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

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

  constructor() { }

  getSkillsAsync():Promise<Skill[]> {
    return new Promise((resolve) => {
      resolve(this.Skills);
    });
  }
}

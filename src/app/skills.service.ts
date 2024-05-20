import { Injectable } from '@angular/core';
import { SkillGroup } from './models/skill-group';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  SkillGroups:SkillGroup[] = [
    {
      GroupLabel: "Professional Skills",
      Skills: [
        {'Percent': 70, 'Label':'Communication'},
        {'Percent': 90, 'Label':'Leadership'},
        {'Percent': 85, 'Label':'Confidence'},
      ]
    },
    {
      GroupLabel: "Software Skills",
      Skills: [
        {'Percent': 85, 'Label':'Adobe Photoshop'},
        {'Percent': 90, 'Label':'Adobe Illustrator'},
        {'Percent': 40, 'Label':'Adobe Fireworks'},
      ]
    },
    {
      GroupLabel: "Code Skills",
      Skills: [
        {'Percent': 90, 'Label':'HTML5 / CSS3'},
        {'Percent': 60, 'Label':'Javascript'},
        {'Percent': 40, 'Label':'PHP'},
      ]
    }
  ];

  constructor() { }

  getSkillsAsync():Promise<SkillGroup[]> {
    return new Promise((resolve) => {
      //simulate load time for a call to server to get data
      setTimeout(() => {
        resolve(this.SkillGroups);
      }, 3000)
    });
  }
}

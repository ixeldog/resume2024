import { Injectable } from '@angular/core';
import { SkillGroup } from './models/skill-group';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  SkillGroupsTest:SkillGroup[] = [
    {
      GroupLabel: "Professional Skills",
      Skills: [
        {'Percent': 90, 'Label':'Leadership'},
        {'Percent': 85, 'Label':'Confidence'},
        {'Percent': 70, 'Label':'Communication'},
      ]
    },
    {
      GroupLabel: "Software Skills",
      Skills: [
        {'Percent': 90, 'Label':'Adobe Illustrator'},
        {'Percent': 85, 'Label':'Adobe Photoshop'},
        {'Percent': 40, 'Label':'Adobe Fireworks'},
      ]
    },
    {
      GroupLabel: "Code Skills",
      Skills: [
        {'Percent': 100, 'Label':'HTML5 / CSS3'},
        {'Percent': 90, 'Label':'HTML5 / CSS3'},
        {'Percent': 90, 'Label':'HTML5 / CSS3'},
        {'Percent': 60, 'Label':'Javascript'},
        {'Percent': 60, 'Label':'Javascript'},
        {'Percent': 40, 'Label':'PHP'},
        {'Percent': 30, 'Label':'PHP'},
        {'Percent': 10, 'Label':'PHP'},
      ]
    }
  ];


  SkillGroups:SkillGroup[] = [
    {
      GroupLabel: "Backend languages",
      Skills: [
        {'Percent': 75, 'Label':'C#'},
        {'Percent': 50, 'Label':'SQL'},
        {'Percent': 25, 'Label':'Java'},
        {'Percent': 25, 'Label':'XSLT'},
      ]
    },
    {
      GroupLabel: "Frontend languages",
      Skills: [
        {'Percent': 75, 'Label':'JavaScript/TypeScript'},
        {'Percent': 50, 'Label':'CSS/SASS'},
        {'Percent': 25, 'Label':'HTML'},
      ]
    },
    {
      GroupLabel: "Frontend Frameworks",
      Skills: [
        {'Percent': 75, 'Label':'Vue 2'},
        {'Percent': 50, 'Label':'React 15'},
        {'Percent': 50, 'Label':'Knockout 3'},
        {'Percent': 25, 'Label':'Angular 17'},
      ]
    },
    {
      GroupLabel: "Tools",
      Skills: [
        {'Percent': 50, 'Label':'Webpack'},
        {'Percent': 50, 'Label':'NPM'},
        {'Percent': 50, 'Label':'jQuery'},
        {'Percent': 25, 'Label':'Docker'},
        {'Percent': 25, 'Label':'ngrok'},
      ]
    },
    {
      GroupLabel: "Azure",
      Skills: [
        {'Percent': 75, 'Label':'Functions'},
        {'Percent': 75, 'Label':'Virtual Machines'},
        {'Percent': 50, 'Label':'Service Bus'},
        {'Percent': 50, 'Label':'Event Grid'},
      ]
    },
    {
      GroupLabel: "DB",
      Skills: [
        {'Percent': 75, 'Label':'SQL Server'},
        {'Percent': 50, 'Label':'Cosmos'},
        {'Percent': 50, 'Label':'MySQL'},
        {'Percent': 25, 'Label':'Oracle'},
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

import { Skill } from "./skill";

export class SkillGroup {
    GroupLabel:string;
    Skills:Skill[];

    constructor() {
        this.GroupLabel = "";
        this.Skills = [];
    }
}

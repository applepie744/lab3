import { Pipe, PipeTransform } from '@angular/core';
import { сharacter } from '../../components/data-table/data-sourse';

@Pipe({
  name: 'skillFilter'
})
export class SkillFilterPipe implements PipeTransform {
  transform(DATA: сharacter[], skillList: string[]): any {
    if (DATA && skillList.length>0){
      return DATA.filter((hero: сharacter) => hero.skills.some((SomeSkill: any) => skillList.includes(SomeSkill)));
    }
    else{
      return DATA
    }
  }
}

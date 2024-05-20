import { Pipe, PipeTransform } from '@angular/core';
import { сharacter } from 'src/app/entities/components/data-table/data-sourse';

@Pipe({
  name: 'lvlStart'
})
export class LvlStartPipe implements PipeTransform {
  transform(DATA: сharacter[], startNumber: string): any {
    let num = Number(startNumber);
    if (DATA && num>0){
      return DATA.filter((hero: any) => {
        return hero.level >= num;
      });
    }
    else {
      return DATA;
    }
  }
}

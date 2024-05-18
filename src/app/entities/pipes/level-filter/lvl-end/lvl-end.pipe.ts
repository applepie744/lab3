import { Pipe, PipeTransform } from '@angular/core';
import { сharacter } from 'src/app/entities/components/data-table/data-sourse';
@Pipe({
  name: 'lvlEnd'
})
export class LvlEndPipe implements PipeTransform {
  transform(DATA: сharacter[], endNumber: string): any {
    let num = Number(endNumber)
    if (DATA && num>0){
      return DATA.filter((hero: any) => {
        return hero.level <= num;
      });
    }
    else {
      return DATA;
    }
  }
}

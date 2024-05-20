import { Pipe, PipeTransform } from '@angular/core';
import { сharacter } from '../../components/data-table/data-sourse';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(DATA: сharacter[], searchText: string): any {
    if (DATA && searchText.length>2){
      return DATA.filter((hero: сharacter) => {
        return hero.name.includes(searchText.charAt(0).toUpperCase() + searchText.slice(1).toLowerCase());
      });
    }
    else{
      return DATA
    }
  }

}

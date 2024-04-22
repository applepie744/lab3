import { Component } from '@angular/core';
import { сharacter } from '../data-table/data-sourse';
import { heroDataService } from '../../service/get-hero';


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  constructor (private readonly _hero: heroDataService) {
  }
  displayedColumns = ['name'];
  public dataSource = this._hero.getHeroes();

  public delButton(id: number): void{
    this.dataSource = this.dataSource.filter((element: сharacter) => element.id !== id);
  }
}



import { Component } from '@angular/core';
import { CHARACTER_DATA, сharacter } from './data-sourse';
import { heroDataService } from '../../service/get-hero';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})

export class DataTableComponent {
  constructor (private readonly _hero: heroDataService) {
  }
  public displayedColumns: string[] = ['id','name', 'power', 'skills', 'level','action'];
  public dataSource = this._hero.getHeroes();

  public delButton(id: number): void{
    this.dataSource = this.dataSource.filter((element: сharacter) => element.id !== id);
  }
}



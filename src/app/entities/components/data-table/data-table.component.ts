import { Component } from '@angular/core';
import { сharacter } from './data-sourse';
import { heroDataService } from '../../service/get-hero';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  constructor(private readonly _hero: heroDataService) {}
  public displayedColumns: string[] = ['id','name','power','skills','level','action'];
  public dataSource: сharacter[] = this._hero.getHeroes();
  public removeRow(id: number): void {
    this.dataSource = this.dataSource.filter(
      (element: сharacter): boolean => element.id !== id
    );
    this._hero.postHeroes(this.dataSource);
  }
}

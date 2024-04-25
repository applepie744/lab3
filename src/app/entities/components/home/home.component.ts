import { Component } from '@angular/core';
import { FormBuilderService } from "../../service/form-builder.service";
import { FormGroup } from '@angular/forms';
import { CHARACTER_DATA, сharacter } from '../data-table/data-sourse';
import { heroDataService } from '../../service/get-hero';
import { DataTableComponent } from '../data-table/data-table.component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  skillList: string[] = ['Ловкость', 'Прыгучесть', 'Ночное зрение', 'Регенерация'];
  public addForm: FormGroup = this._fbService.addForm;
  public addSkill: FormGroup = this._fbService.addSkill;
  
  constructor(
    private readonly _fbService: FormBuilderService,
    private readonly _heroesData: heroDataService,
  ) {
  }

  public dataSource: сharacter[] = this._heroesData.getHeroes();
  displayedColumns = ['name'];

  public addHero(): void {
    const hero = this.addForm.getRawValue();
    if (hero) {
      const newHero = {id: this.dataSource.length + 1, ...hero}
      this.dataSource.push(newHero);
    }
    this.addForm.reset();
  };

  public onSubmitSkillList(): void {
    if (this.addSkill.valid){
      this.skillList.push(this.addSkill.value['skill']);
    }
    this.addSkill.reset();
  };

  public removeHero(id: number): void {
    this.dataSource = this.dataSource.filter((element: сharacter): boolean => element.id !== id);
    this._heroesData.postHeroes(this.dataSource);
  }

  public sortLevel(value: string): void {
    if (value == 'option1'){
      this.dataSource = this.dataSource.slice().sort((a: сharacter, b: сharacter) => a.level - b.level);
    }else {
      this.dataSource = this.dataSource.slice().sort((a: сharacter, b: сharacter) => b.level - a.level);
    }
  }
}



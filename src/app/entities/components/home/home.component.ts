import { Component } from '@angular/core';
import { FormBuilderService } from "../../service/form-builder.service";
import { FormGroup } from '@angular/forms';
import { сharacter } from '../data-table/data-sourse';
import { heroDataService } from '../../service/get-hero';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  skillList: string[] = ['Ловкость', 'Прыгучесть', 'Ночное зрение', 'Регенерация'];
  public addForm: FormGroup = this._fbService.addForm;
  public addSkill: FormGroup = this._fbService.addSkill;
  public dataSource: сharacter[] = this._heroesData.getHeroes();
  public displayedColumns = ['name'];
  public searchText="";
  public valueSkill=[];
  public startLevelNumber = 1;
  public endLevelNumber = 10;
  // public strIcon = 'verified_user'

  constructor(
    private readonly _fbService: FormBuilderService,
    private readonly _heroesData: heroDataService,
  ) {
  }

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
  
  // public changeIcon(level: number): string {
  //     if (level<3){
  //       this.strIcon = 'child_friendly'
  //     }
  //     else if (level>9)
  //     {
  //       this.strIcon = 'edit'
  //     }
  //     return this.strIcon
  //   }
    
  }




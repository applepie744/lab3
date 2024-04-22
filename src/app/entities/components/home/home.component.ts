import { Component } from '@angular/core';
import { FormBuilderService } from "../../service/form-builder.service";
import { FormGroup } from '@angular/forms';
import { CHARACTER_DATA, сharacter } from '../data-table/data-sourse';
import { heroDataService } from '../../service/get-hero';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  skillList: string[] = ['Ловкость', 'Прыгучесть', 'Ночное зрение', 'Регенерация'];
  dataSource = CHARACTER_DATA;
  public addForm: FormGroup = this._fbService.addForm;
  public addSkill: FormGroup = this._fbService.addSkill;


  constructor(private readonly _fbService: FormBuilderService, private readonly _hero: heroDataService) { }
  displayedColumns = ['name'];
  
  public onSubmit(): void {
    const hero = this.addForm.getRawValue();
    if (hero) {
      const newHero = {id: (this.dataSource[this.dataSource.length - 1].id + 1), ...hero}
      this.dataSource = [...this.dataSource, newHero];
      this._hero.getHeroes()
    }
    this.addForm.reset();
  };

  public onSubmitSkillList(): void {
    if (this.addSkill.valid){
      this.skillList.push(this.addSkill.value['skill']);
    }
  };

  public delButton(id: number): void{
    this.dataSource = this.dataSource.filter((element: сharacter) => element.id !== id);
  }

}
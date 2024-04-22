import { Component } from '@angular/core';
import { FormBuilderService } from "../../service/form-builder.service";
import { FormGroup } from '@angular/forms';
import { CHARACTER_DATA, сharacter } from '../data-table/data-sourse';



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

  constructor(private readonly _fbService: FormBuilderService) { }

  public onSubmit(): void {
    if (this.addForm.valid){
      var el: сharacter = {
        id: Number(CHARACTER_DATA.length + 1),
        name: this.addForm.value['name'],
        power: this.addForm.value['power'],
        skills: this.addForm.value['skills'],
        level: this.addForm.value['level'],
      };
      this.dataSource.push(el);
    }
  };

  public onSubmitSkillList(): void {
    if (this.addSkill.valid){
      this.skillList.push(this.addSkill.value['skill']);
    }
  };

}
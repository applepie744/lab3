import { Component} from '@angular/core';
import { FormBuilderService } from "../../service/form-builder.service";
import { FormGroup } from '@angular/forms';
import { сharacter } from '../data-table/data-sourse';
import { heroDataService } from '../../service/get-hero';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

  skillList: string[] = ['Ловкость', 'Прыгучесть', 'Ночное зрение', 'Регенерация'];
  public addForm: FormGroup = this._fbService.addForm;
  public addSkill: FormGroup = this._fbService.addSkill;
  public dataSource: сharacter[] = this._heroesData.getHeroes();
  public displayedColumns = ['name'];
  public searchText="";
  public valueSkill=[];
  public startLevelNumber = '';
  public endLevelNumber = '';
  public strIcon = 'verified_user';
  public selectedIndex: number | undefined; 

  constructor(
    private readonly _fbService: FormBuilderService,
    private readonly _heroesData: heroDataService,
    private readonly _message: MatSnackBar,
  ) {
  }

  public addHero(): void {
    const hero = this.addForm.getRawValue();
    hero['name'] = hero['name'].charAt(0).toUpperCase()+hero['name'].slice(1).toLowerCase();
    if (hero) {
      const newHero = {id: this.dataSource.length + 1, ...hero}
      this.dataSource.push(newHero);
    }
    this.addFormReset();
  };

  public onSubmitSkillList(): void {
    if (this.addSkill.valid){
      this.skillList.push(this.addSkill.value['skill']);
    }
    this.addSkillReset();
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

  errorMessage(formControler: string): string {
    const form: FormControl = (this.addForm.get(formControler) as FormControl);
    return form.hasError('required') ?
      'Заполните обязательное поле' :
      form.hasError('pattern') ?
      'Некорректные данные' :
      form.hasError('max') || form.hasError('min')?
      'Выберите доступное значение: от 1 до 10':'';
 }

 errorMessageSkill(formControler: string): string {
  const form: FormControl = (this.addSkill.get(formControler) as FormControl);
  return form.hasError('required') ?
    'Заполните обязательное поле' : '';
}
  
  public changeIcon(level: number): string {
    if (level===10){
      return 'star'
    }
    return 'filter_'+level
  }

  public addFormReset(): void {
    this.addForm.reset();
    this._message.open('Герой успешно добавлен', 'ОК', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 2500
    });
  }
  public addSkillReset(): void {
    this.addSkill.reset();
    this._message.open('Способность доступна для выбора', 'ОК', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 2500,
    });
  }
  expansionPanelIndex(index: number) { // Step 2
    this.selectedIndex = index;
  }
}


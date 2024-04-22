import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  addForm: FormGroup;
  addSkill: FormGroup;

  constructor (private readonly _fb: FormBuilder){
    this.addForm = new FormGroup({
      name: this._fb.control('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      power: this._fb.control('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.max(10),Validators.min(1)]),
      skills: this._fb.control('',[Validators.required]),
      level: this._fb.control('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.max(10),Validators.min(1)]),
    });

    this.addSkill = new FormGroup({
      skill: this._fb.control('',[Validators.required]),
    });
  };
}

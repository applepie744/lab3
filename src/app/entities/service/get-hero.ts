import { Injectable } from "@angular/core";
import { CHARACTER_DATA, сharacter } from "../components/data-table/data-sourse";

@Injectable({
  providedIn: 'root'
})
export class heroDataService {
    private _CHARACTER_DATA: сharacter[] = CHARACTER_DATA;
    
    public getHeroes(): сharacter[] {
      return this._CHARACTER_DATA;
    }

    public postHeroes(value: сharacter[]): void {
      this._CHARACTER_DATA = value;
    }
}
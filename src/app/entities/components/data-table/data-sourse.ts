export interface сharacter {
    name: string;
    id: number;
    power: number;
    skills: string[];
    level: number;
}
  
export const CHARACTER_DATA: сharacter[] = [
    { id: 1, name: 'Hero', power: 4, skills: ['Прыгучесть'], level: 10 },
    { id: 2, name: 'Alis', power: 1, skills: ['Регенерация','Магия'], level: 6 },
    { id: 3, name: 'Alex', power: 2, skills: ['Мантия','Сила'], level: 3 },
    { id: 3, name: 'Alex', power: 2, skills: ['Мантия','Сила'], level: 3 },
];
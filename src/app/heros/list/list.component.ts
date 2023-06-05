import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
public heroesName: String[] =['Iroman', 'Hulk', 'SuperMan','SuperWoman','SheHulk','Mario Bross']
// public deleteHeroe: String ='';
public deleteHeroe?: String;


public removeHeroes():void{
 // const deleteHero= this.heroesName.pop();
  //console.log({deleteHero})

  this.deleteHeroe = this.heroesName.pop();
}
}

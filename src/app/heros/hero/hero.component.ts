import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 public name: String= 'iromand';
 public age: number= 45;

 get CapitalizeName():String{
  return this.name.toUpperCase();

 }

  geteroDescription():String{
    return `${this.name}- ${this.age}`;

  }
  public changeHero():void{
   this.name ='SuperWoman';
  }
  changeAge():void{
    this.age=48;
  }
  resetValues():void{
    this.name='iroman'
    this.age=45
  }
}

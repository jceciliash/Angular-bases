import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increase(1)">Increase +1 </button>
 <button (click)="resetCount()">Reset </button>
 <button (click)="increase(-1)">Decrementar</button>
  `
})

export class CounterComponent  {
  public counter: number = 30;
  //  public increaseBy(): void{
  //         this.counter= this.counter+1;
  //  }
  //   public deCreaseBy():void {
  //     this.counter=this.counter-1;
  //   }

   increase(value: number):void{
    this.counter += value;
  }

  // reset(value: number):void{
  //   this.counter = value;
  // }
    resetCount(){
      this.counter=30;
    }

}

import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>

        <button (click)="addCounter(1)">Incrementar</button>
        <button (click)="resetCounter()">reset</button>
        <button (click)="addCounter(-1)">Decrementar</button>
    `
})

export class CounterComponent {

    counter = 10;

    constructor() { }
    
    addCounter(value: number): void{
        this.counter += value;
      }
    
      resetCounter():void {
        this.counter = 10;
      }

}

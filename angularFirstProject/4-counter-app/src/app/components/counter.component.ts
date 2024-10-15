import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = "Counter usando Redux"
  counter: number;

  constructor(private store: Store<{count: number}>) {
    this.counter = 0
    this.store.select('count').subscribe( number => {
      this.counter = number
    })
  }

  increment(): void {
    // this.counter++
    this.store.dispatch(increment({add: 10}));
  }

  decrement(): void{
    // this.counter--
    this.store.dispatch(decrement());
    console.log('Decrementando...')
  }

  reset(): void{
    // this.counter = 0
    this.store.dispatch(reset());
    console.log('Reseteando...')
  }
}

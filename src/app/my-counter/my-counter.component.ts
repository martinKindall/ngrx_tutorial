import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment(): void {
    this.store.dispatch(increment({message: 'Hello I am a metadata'}));
  }
  decrement(): void {
    this.store.dispatch(decrement());
  }
  reset(): void {
    this.store.dispatch(reset());
  }
}

import {Action, createReducer, on, State} from '@ngrx/store';
import {decrement, increment, reset} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: number, props) => {
    console.log(props.message);
    return state + 1;
  }),
  on(decrement, (state: number) => state - 1),
  on(reset, (state: number) => 0)
);

export function counterReducer(state: number, action: Action): number {
  return _counterReducer(state, action);
}

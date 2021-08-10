import { useReducer } from 'react';
import { Action } from './login.actions'

export type State = {
  value: number;
}

export const initialCounterState: State = {
  value: 0
}

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
}

export function counterReducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Increase:
      return {
        ...state,
        value: state.value + action.payload
      }
    case ActionKind.Decrease:
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state;
  }
}

//const [state, dispatch] = useReducer(counterReducer, initialCounterState);

export const loginContext = { counterReducer, initialCounterState };
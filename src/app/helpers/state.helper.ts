import { Action, ReducerTypes, ActionCreator, ActionReducer, ActionType, createReducer } from '@ngrx/store';

export function createRehydrateReducer<S, A extends Action = Action>(
  key: string,
  initialState: S,
  ...ons: ReducerTypes<S, ActionCreator[]>[]
): ActionReducer<S, A> {
  const item = localStorage.getItem(key);
  const newInitialState =
    (item && JSON.parse(item)) ?? initialState;

  const newOns: ReducerTypes<S, ActionCreator[]>[] = [];
  ons.forEach((oldOn: ReducerTypes<S, ActionCreator[]>) => {
    const newReducer: ActionReducer<S, A> = (
      state: S | undefined,
      action: ActionType<ActionCreator[][number]>
    ) => {
      const newState = oldOn.reducer(state as any, action);
      localStorage.setItem(key, JSON.stringify(newState));
      return newState;
    };
    newOns.push({ ...oldOn, reducer: newReducer } as any);
  });

  return createReducer(newInitialState, ...newOns);
}
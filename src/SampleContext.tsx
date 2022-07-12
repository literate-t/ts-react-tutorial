import { createContext, Dispatch, useContext, useReducer } from 'react';

type Color = 'red' | 'yellow' | 'orange';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
  children: React.ReactNode;
};

export function SamepleProvider({ children }: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSamepleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 해당 처리를 안 하면 사용하는 곳에서 state가 null일 수 있다는 오류가 떠버림
  return state;
}

export function useSamepleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}

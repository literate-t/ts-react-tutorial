import React, { useState, useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = (): void => dispatch({ type: 'INCREASE' });
  const onDecrease = (): void => dispatch({ type: 'DECREASE' });
  //const [count, setCount] = useState(0);
  //   const onIncrease = (): void => setCount((count) => count + 1);
  //   const onDecrease = (): void => setCount((count) => count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;

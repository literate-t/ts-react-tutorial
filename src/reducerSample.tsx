import { useSamepleDispatch, useSamepleState } from './SampleContext';

function ReducerSample() {
  const state = useSamepleState();
  const dispatch = useSamepleDispatch();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'BYE' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'yellow' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;

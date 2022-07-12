import React from 'react';
import ReducerSample from './ReducerSample';
import { SamepleProvider } from './SampleContext';

const App: React.FC = () => {
  return (
    <SamepleProvider>
      <ReducerSample />
    </SamepleProvider>
  );
};

export default App;

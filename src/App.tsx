import React from 'react';
import Counter from './Counter';
import TaeForm from './TaeForm';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; desc: string }) => {
    console.log(form);
  };
  return (
    <>
      <Counter />
      <TaeForm onSubmit={onSubmit} />
    </>
  );
};

export default App;

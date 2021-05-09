import React from 'react';
import Potato from './potato';

function Food({favourite}) {
    return <h1>I LIke {favourite}</h1>;
}


function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Potato />
        <Food favourite="kimchi"/>
        <Food favourite="pasta"/>
        <Food favourite="pizza"/>
        <Food favourite="chicken"/>
    </div>
  );
}

export default App;

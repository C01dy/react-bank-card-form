import React from 'react';
import './app.sass';

const App = () => {
  return (
    <div className="app" onClick={() => console.log('hey')} key="583">
      <h1>Hello new application!</h1>
    </div>
  );
};

export default App;

import React from 'react';
import s from './app.module.sass';
import Form from '../form';
import Flip from '../flip';

const App = () => {
  return (
    <div className={s.app}>
      <Form/>
    </div>
  );
};

export default App;

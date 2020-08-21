import React from 'react';
import s from './app.module.sass';
import Form from '../form';
import Flip from '../flip';

const App = () => {
  return (
    <div className={s.app}>
      <Form/>
      {/* <Flip front={<h1>Front</h1>} back={<h1>Back</h1>}/> */}
    </div>
  );
};

export default App;

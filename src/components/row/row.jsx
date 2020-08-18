import React from 'react';
import s from './row.module.sass';

const Row = ({ children }) => {
  return <div className={s.row} >
      {children}
  </div>;
};

export default Row;

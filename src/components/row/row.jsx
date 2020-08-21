import React from 'react';
import s from './row.module.sass';

const Row = ({ children, justify = 'space-between' }) => {
  return <div className={s.row} style={{justifyContent: justify}}>
      {children}
  </div>;
};

export default Row;

import React from 'react';
import s from './card-input.module.sass';

const CardInput = ({
  label = null,
  type = 'text',
  html_for = null,
  width = '100%'
}) => {
  return (
    <div className={s.cardInput} style={{width}}>
      <label className={s.label} htmlFor={html_for}>{label}</label>
      <input className={s.cardNumInput} type={type} />
    </div>
  );
};

export default CardInput;

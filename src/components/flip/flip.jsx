import React, { useState, useRef, useEffect } from 'react';
import s from './flip.module.sass';

const Flip = ({ front, back, backVisible }) => {

  return (
    <div className={`${s.flipper} ${backVisible ? s.flips : ''}`}>
      <div className={s.front}>{front}</div>
      <div className={s.back}>{back}</div>
    </div>
  );
};

export default Flip;

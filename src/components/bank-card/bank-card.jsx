import React from 'react';
import s from './bank-card.module.sass';
import Row from '../row';

const BankCard = () => {


  return <div className={s.wrap}>
    <div className={s.innerCard}>
      <Row>
        <div className={s.cardNumMask}>
          
        </div>
      </Row>
    </div>
  </div>;
};

export default BankCard;

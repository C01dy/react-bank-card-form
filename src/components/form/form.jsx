import React, { useState } from 'react';
import s from './form.module.sass';
import Row from '../row';
import BankCard from '../bank-card';

const Form = () => {
  const [cardNumber, setCardNumber] = useState('');

  const onSetCardNumber = (e) => {
    // if (cardNumber.split(" ").join('').length) {
      const regexp = e.target.value.replace(/[^\d]/gi, '').replace(/(.{4})/g, '$1 ') // only digits input
      setCardNumber(regexp);
    // }
  };

  return (
    <div className={s.wrap}>
      <form className={s.form}>
        <BankCard />

        <Row>
          <div className={s.cardInput} style={{ width: '100%' }}>
            <label className={s.label} htmlFor="card-num">
              Card Number
            </label>
            <input
              className={s.cardNumInput}
              value={cardNumber}
              onChange={onSetCardNumber}
              maxLength={19}
            />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '100%' }}>
            <label className={s.label} htmlFor="card-holder">
              Card Holders
            </label>
            <input className={s.cardNumInput} />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '37%' }}>
            <label className={s.label} htmlFor="expiration-date">
              Expiration Date
            </label>
            <input className={s.cardNumInput} type="number" />
          </div>

          <div className={s.cardInput} style={{ width: '37%' }}>
            <input className={s.cardNumInput} type="number" />
          </div>

          <div className={s.cardInput} style={{ width: '20%' }}>
            <label className={s.label} htmlFor="cvv">
              CVV
            </label>
            <input className={s.cardNumInput} type="number" />
          </div>
        </Row>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

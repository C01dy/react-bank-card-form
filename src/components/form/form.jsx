import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {cardNumRegConfigs, cvvRegConfigs} from '../../register-configs';
import {normalizeCardNumber, normalizeCvv} from '../../inputs-normalizes';
import s from './form.module.sass';
import Row from '../row';
import BankCard from '../bank-card';


const years = [
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
  2031,
];

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Form = () => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.wrap}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BankCard />

        <Row>
          <div className={s.cardInput} style={{ width: '100%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="card-num">
                Card Number
              </label>
              <span className={s.error}>
                {errors.cardNumber && errors.cardNumber.message}
              </span>
            </div>
            <input
              className={`${s.cardNumInput} ${
                errors.cardNumber ? s.errorBorder : ''
              }`}
              name="cardNumber"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              ref={register(cardNumRegConfigs)}
              onChange={(e) =>
                (e.target.value = normalizeCardNumber(e.target.value))
              }
            />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '100%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="card-holder">
                Card Holders
              </label>
            </div>
            <input name="cardHolders" ref={register} />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="expiration-date">
                Expiration Date
              </label>
            </div>
            <select name="expirationDateMonth" ref={register}>
              <option selected disabled>
                Month
              </option>
              {months.map((item, idx) => (
                <option value={item} key={item + idx}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}></div>
            <select name="expirationDateYear" ref={register}>
              <option selected disabled>
                Year
              </option>
              {years.map((item, idx) => (
                <option key={idx + item}>{item}</option>
              ))}
            </select>
          </div>

          <div className={s.cardInput} style={{ width: '29%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="cvv">
                CVV
              </label>
              <span className={s.error}>
                {errors.cvvNumber && errors.cvvNumber.message}
              </span>
            </div>
            <input
              className={`${s.cardNumInput} ${
                errors.cvvNumber ? s.errorBorder : ''
              }`}
              name="cvvNumber"
              type="number"
              ref={register(cvvRegConfigs)}
              onChange={(e) => (e.target.value = normalizeCvv(e.target.value))}
            />
          </div>
        </Row>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

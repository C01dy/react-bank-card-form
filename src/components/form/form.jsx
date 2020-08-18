import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './form.module.sass';
import Row from '../row';
import BankCard from '../bank-card';

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
              type="number"
              ref={register({
                maxLength: {
                  value: 16,
                  message: 'length must be 16',
                },
                minLength: {
                  value: 16,
                  message: 'length must be 16',
                },
              })}
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
            <input />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="expiration-date">
                Expiration Date
              </label>
            </div>
            <select name="expiration-date">
              <option selected disabled>
                Month
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => (
                <option key={idx + item}>{item}</option>
              ))}
            </select>
          </div>

          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}></div>
            <select name="expiration-date">
              <option selected disabled>
                Year
              </option>
              {[
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
              ].map((item, idx) => (
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
              ref={register({
                maxLength: {
                  value: 4,
                  message: 'max length 4',
                },
                minLength: {
                  value: 3,
                  message: 'min length 3',
                },
              })}
            />
          </div>
        </Row>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

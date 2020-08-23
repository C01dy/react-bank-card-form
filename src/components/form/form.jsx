import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  cardNumRegConfigs,
  cvvRegConfigs,
  holdersRegConfigs,
} from '../../register-configs';
import { normalizeCardNumber, normalizeCvv } from '../../inputs-normalizes';
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
  const { register, errors, handleSubmit } = useForm();

  const [cardNum, setCardNum] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [backVisible, setBackVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const changeHandler = (e) => {
    e.target.value = normalizeCardNumber(e.target.value);
    e.target.value.length <= 19 && setCardNum(e.target.value);
  };
  return (
    <div className={s.wrap}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <BankCard
          cardNum={cardNum}
          cardHolder={cardHolder}
          month={month}
          year={year}
          cvv={cvv}
          backVisible={backVisible}
        />

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
              className={`${s.cardInput} ${
                errors.cardNumber ? s.errorBorder : ''
              }`}
              name="cardNumber"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              ref={register(cardNumRegConfigs)}
              onChange={changeHandler}
              maxLength={19}
            />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '100%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="card-holder">
                Card Holders
              </label>
              <span className={s.error}>
                {errors.cardHolders && errors.cardHolders.message}
              </span>
            </div>
            <input
              className={`${s.cardInput} ${
                errors.cardHolders ? s.errorBorder : ''
              }`}
              name="cardHolders"
              ref={register(holdersRegConfigs)}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>
        </Row>

        <Row>
          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}>
              <label className={s.label} htmlFor="expiration-date">
                Expiration Date
              </label>
            </div>
            <select
              name="expirationDateMonth"
              ref={register}
              onChange={(e) => setMonth(e.target.value)}>
              <option defaultValue disabled>
                Month
              </option>
              {months.map((item, idx) => (
                <option value={item} key={item + idx}>
                  {('' + item).length < 2 ? '0' + item : item}
                </option>
              ))}
            </select>
          </div>

          <div className={s.cardInput} style={{ width: '34%' }}>
            <div className={s.topFieldText}></div>
            <select
              name="expirationDateYear"
              ref={register}
              onChange={(e) => setYear(e.target.value)}>
              <option defaultValue disabled>
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
              className={`${s.cardInput} ${
                errors.cvvNumber ? s.errorBorder : ''
              }`}
              name="cvvNumber"
              type="number"
              ref={register(cvvRegConfigs)}
              onChange={(e) => {
                e.target.value = normalizeCvv(e.target.value);
                setCvv(e.target.value)
              }}
              onBlur={() => setBackVisible(false)}
              onFocus={() => setBackVisible(true)}
            />
          </div>
        </Row>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

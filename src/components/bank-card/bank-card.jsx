import React from 'react';
import s from './bank-card.module.sass';
import Row from '../row';
import chip from '../../assets/images/chip.png';

const BankCard = ({ cardNum, cardHolder, month, year }) => {
  const paymentSystem = () => {
    if (cardNum.match(new RegExp(/^(4)/)) != null) {
      return <i className={`fab fa-cc-visa ${s.paySys}`}></i>;
    } else if (cardNum.match(new RegExp(/^(5)/)) != null) {
      return <i className={`fab fa-cc-mastercard ${s.paySys}`}></i>;
    } else if (cardNum.match(new RegExp(/^(3)/)) != null) {
      return <i className={`fab fa-cc-amex ${s.paySys}`}></i>;
    }
  };

  return (
    <div className={s.wrap}>
      <div className={s.innerCard}>
        <img className={s.chip} src={chip} alt="chip" />
        {paymentSystem()}

        <div className={s.holder}>
          <div className={s.holderTitle}>Card holder</div>
          <div className={s.holderName}>
            {!cardHolder.length ? 'Full name' : cardHolder}
          </div>
        </div>

        <div className={s.expires}>
          <div className={s.expiresTitle}>Expires</div>
          <div className={s.expiresDate}>
            {!month.length
              ? 'MM/YY'
              : month.length < 2
              ? `0${month}/${year.slice(2) || 'YY'}`
              : `${month}/${year.slice(2) || 'YY'}`}
          </div>
        </div>

        <Row justify="center">
          <div className={s.cardNumMask}>
            {'#### #### #### ####'
              .replace(new RegExp(`^.{${cardNum.length}}`, 'g'), cardNum)
              .replace(/(.{4})/g, '$1')}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default BankCard;

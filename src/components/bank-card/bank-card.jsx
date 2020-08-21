import React from 'react';
import s from './bank-card.module.sass';
import Row from '../row';
import chip from '../../assets/images/chip.png';
import Flip from '../flip';

const BankCard = ({ cardNum, cardHolder, month, year, cvv, backVisible }) => {
  const paymentSystem = (clazz) => {
    if (cardNum.match(new RegExp(/^(4)/)) != null) {
      return <i className={`fab fa-cc-visa ${clazz}`}></i>;
    } else if (cardNum.match(new RegExp(/^(5)/)) != null) {
      return <i className={`fab fa-cc-mastercard ${clazz}`}></i>;
    } else if (cardNum.match(new RegExp(/^(3)/)) != null) {
      return <i className={`fab fa-cc-amex ${clazz}`}></i>;
    }
  };

  const cardFront = (
    <div className={s.wrap}>
      <div className={s.innerCard}>
        <div className={s.front}>
          <img className={s.chip} src={chip} alt="chip" />
          {paymentSystem(s.paySys)}

          <div className={s.holder}>
            <div className={s.holderTitle}>Card holder</div>
            <div className={s.holderName}>
              {!cardHolder.length ? 'Full name' : cardHolder}
            </div>
          </div>

          <div className={s.expires}>
            <div className={s.expiresTitle}>Expires</div>
            <div className={s.expiresDate}>
              {!month
                ? `MM/${year.slice(2) || 'YY'}`
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
    </div>
  );

  const cardBack = (
    <>
      <div className={s.wrap}>
        <div className={s.topLine}></div>
        <div className={s.innerCard}>
          {paymentSystem(s.paySysBack)}
          <div className={s.back}>
            <div className={s.cvv}>
              <div className={s.cvvTitle}>cvv</div>
              <div className={s.cvvOutput}>
                {cvv}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <Flip front={cardFront} back={cardBack} backVisible={backVisible} />;
};

export default BankCard;

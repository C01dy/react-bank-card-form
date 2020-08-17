import React, { useState } from 'react';
import s from './form.module.sass';
import Row from '../row';
import CardInput from '../card-input';
import SubmitBtn from '../submit-btn';

const Form = () => {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <div className={s.wrap}>
      <form className={s.form}>
        <Row>
          <CardInput type="number" label="Card Number" html_for="card-num" />
        </Row>

        <Row>
          <CardInput label="Card Holders" html_for="card-folder" />
        </Row>

        <Row>
          <CardInput type="number" label="Expiration Date" html_for="card-folder" width="37%" />
          <CardInput label="Card Holders" html_for="card-folder" width="37%"/>
          <CardInput label="CVV" html_for="card-folder" width="20%"/>
        </Row>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

const cvvRegConfigs = {
  minLength: {
    value: 3,
    message: 'min length 3',
  },
};

const cardNumRegConfigs = {
  required: {
    value: true,
    message: 'fill this field',
  },
  minLength: {
    value: 19,
    message: 'input 16 digits',
  },
};

export { cardNumRegConfigs, cvvRegConfigs };

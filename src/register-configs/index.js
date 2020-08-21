const cvvRegConfigs = {
  minLength: {
    value: 3,
    message: 'Min 3 digits',
  },
};

const cardNumRegConfigs = {
  required: {
    value: true,
    message: 'Fill this field',
  },
  minLength: {
    value: 19,
    message: 'Input 16 digits',
  },
};

const holdersRegConfigs = {
  required: {
    value: true,
    message: 'Fill this field'
  }
}

export { cardNumRegConfigs, cvvRegConfigs, holdersRegConfigs };

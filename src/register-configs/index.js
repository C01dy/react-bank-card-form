const cvvRegConfigs = {
  required: {
    value: true,
    message: 'Fill this field'
  },
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
  pattern: {
    value: /\d{4}\s\d{4}\s\d{4}\s\d{4}/,
    message: 'Unacceptable symbols',
  },
  minLength: {
    value: 19,
    message: 'Enter 16 digits'
  }
};

const holdersRegConfigs = {
  required: {
    value: true,
    message: 'Fill this field'
  },
  pattern: {
    value: /(\w{1,})\s(\w{1,})/,
    message: 'Wrong format, must be: "name surname"'
  }
}


export { cardNumRegConfigs, cvvRegConfigs, holdersRegConfigs };

const normalizeCardNumber = (value) => {

  if (value.length) {
    return value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' ')
      .substr(0, 19);
  }
  return '';
};

const normalizeCvv = (value) => {
  if (value.length) {
    return value.substr(0, 4);
  }
  return '';
};


export { normalizeCardNumber, normalizeCvv };

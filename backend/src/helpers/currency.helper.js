const formatterPeso = new Intl.NumberFormat("en-US");

const convertToDineroInteger = (amount) => {
  return Number(Number(amount).toFixed(4).toString().replace(".", ""));
};

module.exports = {
  formatterPeso,
  convertToDineroInteger,
};

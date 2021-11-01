export default (date_hired) => {
  return Math.trunc(Math.abs(new Date() - new Date(date_hired)) / (1000 * 60 * 60 * 24 * 365));
};

const { theme } = require('theme');

export const accuracyColorPicker = (val) => {
  val = parseFloat(val);
  console.log(val < parseFloat(100) && val > parseFloat(50));
  if (val === parseFloat(100)) return theme.colors.green;
  else if (val < parseFloat(100) && val > parseFloat(50)) return 'orange';
  else if (val < parseFloat(50)) return theme.colors.red;
  else return theme.colors.default;
};

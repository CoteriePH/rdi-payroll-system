import { theme } from "@/theme";
export const accuracyColorPicker = (val) => {
  val = parseFloat(val);
  if (val === parseFloat(100)) return theme.colors.green;
  else if (val < parseFloat(100) && val > parseFloat(50)) return "orange";
  else if (val < parseFloat(50)) return theme.colors.red;
  else return theme.colors.default;
};

export const caStatusColorPicker = (val) => {
  switch (val) {
    case "PAID":
      return theme.colors.green;
    case "INCOMPLETE":
      return theme.colors.red;
    case "DELAYED":
      return "orange";
    default:
      break;
  }
};

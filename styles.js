import { Appearance } from "react-native-appearance";

export const theme = Appearance.getColorScheme(); // 현재 기기의 theme

export const lightTheme = {
  accent: "#0095f6",
  fontColor: "white",
  bgColor: "#fff",
  facebookColor: "#385285",
  blue: "#0095f6",
  formBgColor: "white",
  formBorderColor: "lightgray",
  formFontColor: "black",
};
export const darkTheme = {
  accent: "gray",
  fontColor: "white",
  bgColor: "#000",
  facebookColor: "white",
  blue: "#0095f6",
  formBgColor: "rgba(255, 255, 255, 0.15)",
  formBorderColor: "rgba(255, 255, 255, 0.15)",
  formFontColor: "white",
};

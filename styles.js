import { Appearance } from "react-native-appearance";

export const theme = Appearance.getColorScheme(); // 현재 기기의 theme

export const lightTheme = {
  accent: "#0095f6",
  fontColor: "#000",
  bgColor: "#fff",
  facebookColor: "#385285",
  blue: "#0095f6",
  formBgColor: "white",
  formBorderColor: "lightgray",
  formFontColor: "#000",
  tabBarColor: "white",
  tabBarFontColor: "#000",
  btnColor: "#0095f6",
};
export const darkTheme = {
  accent: "gray",
  fontColor: "#fff",
  bgColor: "#000",
  facebookColor: "#385285",
  blue: "#0095f6",
  formBgColor: "rgba(255, 255, 255, 0.15)",
  formBorderColor: "rgba(255, 255, 255, 0.15)",
  formFontColor: "#fff",
  tabBarColor: "black",
  tabBarFontColor: "#fff",
  btnColor: "#0095f6",
};

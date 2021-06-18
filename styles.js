import { Appearance } from "react-native-appearance";

export const theme = Appearance.getColorScheme(); // 현재 기기의 theme

export const lightTheme = {
  accent: "#0095f6",
  fontColor: "#000",
  bgColor: "#fff",
  facebookColor: "#385285",
  blue: "#0095f6",
  formBgColor: "rgba(0, 0, 0, 0.15)",
  formBorderColor: "rgba(0, 0, 0, 0.15)",
  formFontColor: "#000",
  tabBarColor: "white",
  tabBarFontColor: "#000",
  btnColor: "#0095f6",
  searchFormBorderColor: "rgba(0, 0, 0, 0.2)",
  searchFontColor: "#000",
  cameraBtnColor: "rgba(255, 255, 255, 0.6)",
  cameraBtnBorderColor: "rgba(255, 255, 255, 0.7)",
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
  searchFormBorderColor: "rgba(255, 255, 255, 0.7)",
  searchFontColor: "#000",
  cameraBtnColor: "rgba(255, 255, 255, 0.6)",
  cameraBtnBorderColor: "rgba(255, 255, 255, 0.7)",
};

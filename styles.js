import { Appearance } from "react-native-appearance";

export const theme = Appearance.getColorScheme(); // 현재 기기의 theme

export const lightTheme = {
  accent: "#0095f6",
  fontColor: "black",
  bgColor: "#fff",
  facebookColor: "#385285",
  blue: "#0095f6",
};
export const darkTheme = {
  accent: "gray",
  fontColor: "white",
  bgColor: "#000",
  facebookColor: "white",
  blue: "#0095f6",
};

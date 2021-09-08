import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#10b981",
  primaryBright: "#10b981",
  primaryDark: "#10b981",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#131a35",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  tertiary: "#353547",
  text: "#fff",
  textDisabled: "#666171",
  textSubtle: "#fff",
  borderColor: "#524B63",
  card: "linear-gradient(245.22deg, rgb(218, 46, 239) 7.97%, rgb(43, 106, 255) 49.17%, rgb(57, 208, 216) 92.1%)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#131a35",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fff",
  textDisabled: "#666171",
  textSubtle: "#fff",
  borderColor: "#524B63",
  card: "linear-gradient(245.22deg, rgb(218, 46, 239) 7.97%, rgb(43, 106, 255) 49.17%, rgb(57, 208, 216) 92.1%)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

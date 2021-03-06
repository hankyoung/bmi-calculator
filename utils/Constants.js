import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const statusBarHeight = Constants.statusBarHeight;
export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
export const componentWidth = screenWidth * 0.9;
export const buttonWidth = screenWidth * 0.42;
export const buttonHeight = screenHeight / 5;

export const colors = {
  blue: "#00C6F0",
  red: "#FF002C",
  grey: "#5F5E6B",
  purpleActive: "#3B2C48",
  purpleInactive: "#2C1E40",
  darkBlue: "#222639",
  pink: "#FF005C",
  black: "#000",
  green: "#00B594",
  yellow: "yellow",
};

export const actionType = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

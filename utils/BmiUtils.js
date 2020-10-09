import { colors } from "./Constants";

const calculateBmiIndex = (weight, height) => {
  const beforeRound = weight / Math.pow(height / 100, 2);
  return Math.round(beforeRound * 100) / 100;
};

const status = {
  UNDER: {
    text: "UNDERWEIGHT",
    titleColor: colors.yellow,
    desc: "You are underweighted. Eat more!",
  },
  NORMAL: {
    text: "NORMAL",
    titleColor: colors.green,
    desc: "You have a normal body weight. Good job!",
  },
  OVER: {
    text: "OVERWEIGHT",
    titleColor: colors.red,
    desc: "You are overweighted. Eat less!",
  },
};

export const calculateBmi = (isMale, weight, height) => {
  let bmiIndex = calculateBmiIndex(weight, height);

  let data;
  if (isMale) {
    if (bmiIndex < 20) {
      data = status.UNDER;
    } else if (bmiIndex >= 20 && bmiIndex < 25) {
      data = status.NORMAL;
    } else {
      data = status.OVER;
    }
  } else {
    if (bmiIndex < 18) {
      data = status.UNDER;
    } else if (bmiIndex >= 18 && bmiIndex < 23) {
      data = status.NORMAL;
    } else {
      data = status.OVER;
    }
  }

  return { index: bmiIndex, data: data };
};

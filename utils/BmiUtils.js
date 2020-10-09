import { colors } from "./Constants";

const calculateBmiIndex = (weight, height) => {
  const beforeRound = weight / Math.pow(height / 100, 2);
  return Math.round(beforeRound * 100) / 100;
};

const status = {
  UNDER: {
    text: "UNDERWEIGHT",
    color: colors.yellow,
    desc: "You are underweighted. Eat more!",
  },
  NORMAL: {
    text: "NORMAL",
    color: colors.green,
    desc: "You have a normal body weight. Good job!",
  },
  OVER: {
    text: "OVERWEIGHT",
    color: colors.red,
    desc: "You are overweighted. Eat less!",
  },
};

export const calculateBmi = (weight, height) => {
  let bmiIndex = calculateBmiIndex(weight, height);

  let result = {
    index: bmiIndex,
  };
  if (bmiIndex < 18.5) {
    result = {
      ...result,
      data: status.UNDER,
    };
  } else if (bmiIndex >= 18.5 && bmiIndex < 30) {
    result = {
      ...result,
      data: status.NORMAL,
    };
  } else {
    result = {
      ...result,
      data: status.OVER,
    };
  }
  return result;
};

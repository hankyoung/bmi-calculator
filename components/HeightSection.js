import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { buttonHeight, colors, componentWidth } from "../utils/Constants";

export default function HeightSection({ height, onValueChange }) {
  return (
    <View style={styles.heightContainer}>
      <Text style={styles.heightTitle}>HEIGHT</Text>
      <Text style={styles.number}>
        {height}
        <Text style={styles.unit}> cm</Text>
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={300}
        value={height}
        step={1}
        onValueChange={(value) => onValueChange(value)}
        minimumTrackTintColor={colors.pink}
        maximumTrackTintColor={colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heightContainer: {
    alignItems: "center",
    backgroundColor: colors.purpleActive,
    height: buttonHeight,
    width: componentWidth,
    borderRadius: 10,
  },
  heightTitle: {
    marginTop: 16,
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
  },
  number: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 6,
  },
  unit: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  slider: {
    width: componentWidth,
    marginTop: 16,
  },
});

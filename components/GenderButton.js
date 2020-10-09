import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { colors, screenWidth } from "../utils/Constants";

export default function GenderButton(props) {
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress()}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        {props.icon}
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpleActive,
    borderRadius: 10,
    width: screenWidth / 2.4,
    height: screenWidth / 2.4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.grey,
    fontSize: 16,
  },
});

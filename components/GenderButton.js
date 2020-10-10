import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { buttonHeight, buttonWidth, colors } from "../utils/Constants";

export default function GenderButton(props) {
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress()}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        {props.icon}
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpleActive,
    borderRadius: 10,
    width: buttonWidth,
    height: buttonHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
  },
});

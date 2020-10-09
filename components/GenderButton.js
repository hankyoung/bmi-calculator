import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { buttonWidth, colors, screenWidth } from "../utils/Constants";

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
    height: buttonWidth + 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
  },
});

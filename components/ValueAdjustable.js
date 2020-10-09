import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, screenWidth } from "../utils/Constants";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ValueAdjustable(props) {
  const [value, setValue] = useState(props.initialValue);
  const [isAdd, setIsAdd] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const timerId = useRef(1);

  const addValue = (delta) => {
    setValue((value) => (value + delta >= 0 ? value + delta : 0));
  };

  const handlePressIn = (isAdd) => {
    addValue(isAdd ? 1 : -1);
    setIsAdd(isAdd);
    setTrigger(true);
  };
  const handlePressOut = () => setTrigger(false);

  // Observe buttons action
  useEffect(() => {
    if (trigger) {
      timerId.current = setInterval(() => {
        addValue(isAdd ? 1 : -1);
      }, 150);
    } else {
      clearInterval(timerId.current);
    }
  }, [trigger]);

  // Observer value changes
  useEffect(() => {
    props.onValueChange(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.number}>
        {value}
        <Text style={styles.unit}> {props.unit}</Text>
      </Text>
      <View style={styles.buttons}>
        {/* Minus button */}
        <TouchableOpacity
          onPressIn={() => handlePressIn(false)}
          onPressOut={handlePressOut}
        >
          <MaterialCommunityIcons
            style={styles.iconButton}
            name="minus-circle"
            size={48}
          />
        </TouchableOpacity>

        {/* Add button */}
        <TouchableOpacity
          onPressIn={() => handlePressIn(true)}
          onPressOut={handlePressOut}
        >
          <MaterialIcons
            style={styles.iconButton}
            name="add-circle"
            size={48}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  title: {
    color: colors.grey,
    fontSize: 16,
  },
  unit: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  number: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth / 2.4 / 1.5,
  },
  iconButton: {
    color: colors.green,
  },
});

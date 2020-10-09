import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  buttonHeight,
  buttonWidth,
  colors,
  actionType,
} from "../utils/Constants";
import { Feather } from "@expo/vector-icons";

export default function ValueAdjustable(props) {
  const [value, setValue] = useState(props.value);
  const [isAdd, setIsAdd] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const timerId = useRef(1);

  const addValue = (delta) => {
    setValue((value) => (value + delta >= 1 ? value + delta : 1));
  };

  const handleLongPress = (action) => {
    switch (action) {
      case actionType.ADD:
        addValue(1);
        setIsAdd(true);
        break;
      case actionType.SUBTRACT:
        addValue(-1);
        setIsAdd(false);
        break;
      default:
    }
    setTrigger(true);
  };

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

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

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
          onPressIn={() => addValue(-1)}
          onLongPress={() => handleLongPress(actionType.SUBTRACT)}
          onPressOut={() => setTrigger(false)}
        >
          <View style={styles.round}>
            <Feather name="minus" size={32} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* Add button */}
        <TouchableOpacity
          onPressIn={() => addValue(1)}
          onPressIn={() => handleLongPress(actionType.ADD)}
          onPressOut={() => setTrigger(false)}
        >
          <View style={styles.round}>
            <Feather name="plus" size={32} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
  title: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
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
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: buttonWidth,
  },
  round: {
    width: 40,
    height: 40,
    backgroundColor: colors.grey,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: colors.grey,
  },
});

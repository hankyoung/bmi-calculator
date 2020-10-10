import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  componentWidth,
  screenWidth,
  statusBarHeight,
} from "./utils/Constants";
import GenderButton from "./components/GenderButton";
import { Foundation } from "@expo/vector-icons";
import { colors } from "./utils/Constants";
import ValueAdjustable from "./components/ValueAdjustable";
import ResultModal from "./components/ResultModal";
import { calculateBmi } from "./utils/BmiUtils";
import HeightSection from "./components/HeightSection";

export default function App() {
  const [isMale, setIsMale] = useState(true);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BMI CALCULATOR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.genderButtons}>
        <GenderButton
          icon={
            <Foundation name="male-symbol" size={100} color={colors.blue} />
          }
          title={"MALE"}
          color={isMale ? colors.purpleInactive : colors.purpleActive}
          onPress={() => setIsMale(true)}
        />
        <GenderButton
          icon={
            <Foundation name="female-symbol" size={100} color={colors.red} />
          }
          title={"FEMALE"}
          color={isMale ? colors.purpleActive : colors.purpleInactive}
          onPress={() => setIsMale(false)}
        />
      </View>

      <HeightSection
        height={height}
        onValueChange={(height) => setHeight(height)}
      />

      <View style={styles.valueAdjustContainer}>
        <ValueAdjustable
          setValue={(value) => setWeight(value)}
          value={weight}
          title={"WEIGHT"}
          unit={"kg"}
        />
        <ValueAdjustable
          setValue={(value) => setAge(value)}
          value={age}
          title={"AGE"}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonLabel}>CALCULATE</Text>
      </TouchableOpacity>

      <ResultModal
        inputData={{ isMale }}
        modalVisible={modalVisible}
        item={calculateBmi(isMale, weight, height)}
        setModalVisible={(isVisible) => setModalVisible(isVisible)}
        onReset={() => {
          setHeight(150);
          setWeight(50);
          setAge(20);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: statusBarHeight,
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
  },
  divider: {
    marginTop: 16,
    borderColor: "#19132f",
    borderWidth: 3,
    height: 1,
    width: screenWidth,
  },
  genderButtons: {
    width: componentWidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueAdjustContainer: {
    width: componentWidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: componentWidth,
    height: 60,
    backgroundColor: colors.pink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

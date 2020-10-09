import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { screenWidth, statusBarHeight } from "./utils/Constants";
import GenderButton from "./components/GenderButton";
import { Foundation } from "@expo/vector-icons";
import { colors } from "./utils/Constants";
import Slider from "@react-native-community/slider";
import ValueAdjustable from "./components/ValueAdjustable";
import ResultModal from "./components/ResultModal";
import { calculateBmi } from "./utils/BmiUtils";

export default function App() {
  const [male, setMale] = useState(false);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(51);
  const [age, setAge] = useState(20);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={{ color: "#fff", fontSize: 28 }}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.genderButtons}>
        <GenderButton
          icon={
            <Foundation name="male-symbol" size={100} color={colors.blue} />
          }
          color={male ? colors.purpleActive : colors.purpleInactive}
          onPress={() => setMale(true)}
        >
          MALE
        </GenderButton>
        <GenderButton
          icon={
            <Foundation name="female-symbol" size={100} color={colors.red} />
          }
          color={male ? colors.purpleInactive : colors.purpleActive}
          onPress={() => setMale(false)}
        >
          FEMALE
        </GenderButton>
      </View>

      <View style={styles.heightSection}>
        <Text style={styles.text}>HEIGHT</Text>
        <Text style={styles.number}>
          {height}
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            {" "}
            cm
          </Text>
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={200}
          value={height}
          step={1}
          onValueChange={(value) => setHeight(value)}
          minimumTrackTintColor={colors.pink}
          maximumTrackTintColor={colors.black}
        />
      </View>

      <View style={styles.weightAgeSection}>
        <ValueAdjustable
          onValueChange={(value) => setWeight(value)}
          initialValue={weight}
          title={"WEIGHT"}
          unit={"kg"}
        />
        <ValueAdjustable
          onValueChange={(value) => setAge(value)}
          initialValue={age}
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
        modalVisible={modalVisible}
        item={calculateBmi(weight, height)}
        setModalVisible={(isVisible) => setModalVisible(isVisible)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: colors.purpleActive,
    borderBottomWidth: 5,
    height: 50,
    width: "100%",
    alignItems: "center",
  },
  safeArea: {
    paddingTop: statusBarHeight,
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  genderButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heightSection: {
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.purpleActive,
    height: screenWidth / 2.4 - 40,
    borderRadius: 10,
    padding: 12,
  },
  text: {
    color: colors.grey,
    fontSize: 16,
  },
  number: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  weightAgeSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
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

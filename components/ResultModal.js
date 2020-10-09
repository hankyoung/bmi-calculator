import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, screenHeight, screenWidth } from "../utils/Constants";
import { Foundation } from "@expo/vector-icons";

export default function ResultModal(props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => props.setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.headerText}>Your Result</Text>
        <View style={styles.modalBodyContainer}>
          <View>
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Gender:{" "}
              <Foundation
                name={props.inputData.isMale ? "male-symbol" : "female-symbol"}
                size={16}
                color={props.inputData.isMale ? colors.blue : colors.red}
              />
            </Text>
            <Text
              style={{
                ...styles.resultTitle,
                color: props.item.data.titleColor,
              }}
            >
              {props.item.data.text}
            </Text>
          </View>

          <Text style={styles.resultIndex}>{props.item.index}</Text>

          <View>
            <View
              style={{ justifyContent: "space-evenly", flexDirection: "row" }}
            >
              <Text style={{ color: colors.yellow }}>
                Height: {props.inputData.height}
              </Text>
              <Text style={{ color: colors.yellow }}>
                Weight: {props.inputData.weight}
              </Text>
              <Text style={{ color: colors.yellow }}>
                Age: {props.inputData.age}
              </Text>
            </View>
            <Text style={styles.resultDesc}>{props.item.data.desc}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.setModalVisible(false)}
        >
          <Text style={styles.buttonLabel}>RE-CALCULATE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 10,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  headerText: { color: "#fff", fontSize: 36, fontWeight: "bold" },
  modalBodyContainer: {
    backgroundColor: colors.purpleActive,
    width: "100%",
    height: screenHeight / 1.5,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: colors.pink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resultIndex: { fontSize: 66, fontWeight: "bold", color: "#fff" },
  resultDesc: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 30,
    textAlign: "center",
  },
});

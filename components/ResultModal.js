import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  colors,
  componentWidth,
  screenHeight,
  screenWidth,
} from "../utils/Constants";
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
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Result</Text>
        </View>
        <View style={styles.modalBodyContainer}>
          <View>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
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
          <Text style={styles.resultDesc}>{props.item.data.desc}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.setModalVisible(false);
            props.onReset();
          }}
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
    width: screenWidth,
    backgroundColor: colors.darkBlue,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    paddingTop: 20,
    width: componentWidth,
  },
  headerText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  modalBodyContainer: {
    backgroundColor: colors.purpleActive,
    width: componentWidth,
    height: screenHeight / 1.5,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: componentWidth,
    height: 60,
    backgroundColor: colors.pink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resultIndex: {
    fontSize: 66,
    fontWeight: "bold",
    color: "#fff",
  },
  resultDesc: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 30,
    textAlign: "center",
  },
});

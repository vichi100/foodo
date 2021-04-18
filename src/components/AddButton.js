import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const AddButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    shadowOpacity: 0.0015 * 5 + 0.18,
    shadowRadius: 0.54 * 5,
    shadowOffset: {
      height: 0.6 * 5
    },
    backgroundColor: "#ffffff",
    // borderRadius: 10,
    borderWidth: 1,
    height: 30,
    width: 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#b9f6ca"
    // marginTop: 10
    // marginBottom: 15
  },
  appButtonText: {
    fontSize: 16,
    color: "#009688",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default AddButton;

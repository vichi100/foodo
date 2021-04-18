import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // padding: 20,
    // paddingTop: 40
  },
  col: {
    flex: 1,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    textAlignVertical: "center"
  },

  spinner: {
    flex: 1,
    marginRight: 10,
    // width: 120,
    height: 30
  }
});

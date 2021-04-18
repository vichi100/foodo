import React, { Component } from "react";
import { Text, View, ScrollView, Image, SafeAreaView } from "react-native";
// import InputSpinner from "react-native-input-spinner";
import InputSpinner from "./src/screen/AddButton/AddButton";
import Styles from "./Styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    let data = [];
    for (var i = 0; i < 10; i++) {
      data.push({
        key: String(i),
        value: Math.floor(Math.random() * 100) + 1
      });
    }
    this.state = {
      value: 1,
      valueReal: 1.5,
      colorLeft: this.getRandomColor(),
      colorRight: this.getRandomColor(),
      data: data
    };
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView style={Styles.container}>
          <Text style={Styles.title}>Skins</Text>

          <View style={Styles.col}>
            <Text style={Styles.text}>Skin Clean</Text>
            <InputSpinner
              value={this.state.value}
              style={Styles.spinner}
              skin="clean"
              max={10}
              colorMax={"#f04048"}
              colorMin={"#82cc62"}
            />
          </View>
          <View style={Styles.col}>
            <Text style={Styles.text}>Skin Modern</Text>
            <InputSpinner
              value={this.state.value}
              style={[
                Styles.spinner,
                { minWidth: 150 } /*reset minWidth set on Style.spinner*/
              ]}
              skin="modern"
              max={10}
              colorMax={"#f04048"}
              colorMin={"#82cc62"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

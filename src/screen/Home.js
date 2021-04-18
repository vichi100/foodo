import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
  Modal,
  TouchableHighlight,
  TextInput,
  Image,
  FlatList
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";

const dataX = [
  {
    name: "China Town",
    menu_types: ["Chinese", "Asian", "Thai"],
    location: "Versova",
    mobile: ["9833097595"],
    other_contact: ["9867614466"],
    address: "35/4 Daily market",
    latnlong: "",
    type_of: ["dine in", "take away"],
    rating: "3.8"
  },
  {
    name: "Fab To Fit",
    menu_types: ["Chinese", "Asian", "Thai"],
    location: "Versova",
    mobile: ["9833097595"],
    other_contact: ["9867614466"],
    address: "35/4 Daily market",
    latnlong: "",
    type_of: ["dine in", "take away"],
    rating: "3.8"
  },
  {
    name: "China Town",
    menu_types: ["Chinese", "Asian", "Thai"],
    location: "Versova",
    mobile: ["9833097595"],
    other_contact: ["9867614466"],
    address: "35/4 Daily market",
    latnlong: "",
    type_of: ["dine in", "take away"],
    rating: "3.8"
  }
];

const Home = props => {
  const { navigation } = props;
  const [search, setSearch] = useState("");

  const goToMenu = item => {
    console.log("item: ", item);
    props.setRestaurantDetails(item);
    navigation.navigate("Menu", item);
  };

  const ItemView = ({ item }) => {
    // console.log("item:   ", item);
    return (
      <TouchableOpacity onPress={() => goToMenu(item)}>
        <View
          style={{
            marginTop: 10,
            paddingBottom: 20,
            shadowOpacity: 0.0015 * 5 + 0.18,
            shadowRadius: 0.54 * 5,
            shadowOffset: {
              height: 0.6 * 5
            },
            backgroundColor: "#ffffff",
            // borderBottomEndRadius: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 20
          }}
        >
          <View>
            <Image
              source={{
                uri: "http://placeimg.com/640/480/any"
              }}
              style={{ height: 200, resizeMode: "stretch", margin: 5 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              marginRight: 10,
              justifyContent: "space-between",
              marginTop: 5
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  //   fontFamily: "FiraSans-Regular",
                  fontWeight: "600",
                  color: "#424242"
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  paddingTop: 0,
                  color: "#37474f",
                  paddingLeft: 0
                }}
              >
                {item.menu_types.join(", ")}
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <MaterialIcons name="star" color={"#bf360c"} size={15} />
                <Text style={{ color: "#616161" }}> 4.5</Text>
              </View>
              <Text style={{ paddingTop: 5, color: "#616161" }}>
                {"\u20B9"}200 for one
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ marginTop: 5, borderColor: "#eeeeee" }}>
        <TextInput
          style={{
            width: "98%",
            height: 40,
            borderTopWidth: 1,
            paddingLeft: 20,
            margin: 5,

            // marginBottom: 5,
            borderRadius: 10,
            borderColor: "#e0e0e0",
            backgroundColor: "#ffffff",
            shadowOpacity: 0.0015 * 5 + 0.18,
            shadowRadius: 0.54 * 5,
            shadowOffset: {
              height: 0.6 * 5
            },
            backgroundColor: "#ffffff"
          }}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search by dish name, restaurant"
        />
        <View style={{ position: "absolute", right: 10, paddingTop: 15 }}>
          <EvilIcons name="search" color={"#ef6c00"} size={24} />
        </View>
      </View>

      <FlatList
        data={dataX}
        //data defined in constructor
        // ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  userDetails: state.AppReducer.userDetails
});
const mapDispatchToProps = {
  setRestaurantDetails
};
export default connect(
  null,
  mapDispatchToProps
)(Home);

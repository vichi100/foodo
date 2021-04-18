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
import Entypo from "react-native-vector-icons/Entypo";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";

const Cart = props => {
  const ItemView = ({ item }) => {
    return (
      <View
        style={{ borderColor: "#000000", borderWidth: 0, flexWrap: "wrap" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
            // margin: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              maxWidth: "35%"
              // justifyContent: "space-between"
            }}
          >
            <Image
              style={{ width: 12, height: 12, marginTop: 3, marginRight: 10 }}
              source={require("../../assets/images/nonveg.png")}
            />
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                marginBottom: 30,
                alignContent: "center",
                alignItem: "center",
                height: 30
              }}
            >
              <InputSpinner
                value={"1"}
                style={Styles.spinner}
                skin="clean"
                max={10}
                colorMax={"#f04048"}
                colorMin={"#c8e6c9"}
                width={90}
                height={30}
                editable={false}
                onDecrease={() => itemRemoved(item)}
                onIncrease={() => itemAdded(item)}
                // buttonTextColor={"#ffffff"}
              />
            </View>
            <Text style={{ marginLeft: 20, marginTop: 10, marginRight: 20 }}>
              {"\u20B9"}
              {item.cost}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ justifyContent: "center", margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {orderCart.restaurant.name}
          </Text>
          <Text>{orderCart.restaurant.location}</Text>
        </View>
        <FlatList
          data={orderCart.items}
          //data defined in constructor
          // ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{ margin: 15 }}>
          <Text>Bill Details</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30
            }}
          >
            <Text>Item Total</Text>
            <Text>{"\u20B9"} 200</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text>Delivery Charge</Text>
            <Text>{"\u20B9"} 0</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text>Delivery Tip</Text>
            <Text>Pay directly to the guy as you wish</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#E0E0E0",
              borderBottomWidth: 1,
              marginLeft: 5,
              marginRight: 5,
              paddingTop: 10,
              marginTop: 20
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}>
              To Pay
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}>
              {"\u20B9"} 200
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  restaurantDetails: state.AppReducer.restaurantDetails
});
const mapDispatchToProps = {
  setRestaurantDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

const orderCart = {
  restaurant: {
    name: "China Town",
    id: "",
    city: "",
    mobile: "9833097595",
    address: "",
    location: "Andheri West"
  },
  customer: {
    name: "",
    id: "",
    mobile: "",
    address: "",
    latlong: ""
  },
  items: [
    {
      id: "Chicken Pullow",
      name: "Chicken Pullow Chicken Pullow Chicken Pullow",
      veg: "no",
      cost: "250",
      quantity: "full",
      count: "1"
    },
    {
      id: "Chana Bhaji",
      name: "Chana Bhaji",
      veg: "no",
      cost: "150",
      quantity: "half",
      count: "1"
    }
  ]
};

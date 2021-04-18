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
import { BottomSheet } from "react-native-btr";
import Cart from "./Cart";

const Order = props => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const showOrderDetails = item => {
    setVisible(true);
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => showOrderDetails(item)}>
        <View
          style={{
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            margin: 5,
            //   paddingBottom: 20,
            shadowOpacity: 0.0015 * 5 + 0.18,
            shadowRadius: 0.54 * 5,
            shadowOffset: {
              height: 0.6 * 5
            },
            backgroundColor:
              item.status === "accepted"
                ? "rgba(0,250,154, .2)"
                : item.status === "out for delivery"
                ? "rgba(135,206,250, .3)"
                : "#ffffff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#eeeeee"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 15
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
              >
                {item.restaurant.name}
              </Text>
              <Text style={{ fontSize: 12, color: "#424242" }}>
                {item.restaurant.location}
              </Text>
              <Text style={{ fontSize: 14, color: "#424242", marginTop: 15 }}>
                {item.order_id}
              </Text>
            </View>
            <View
              style={{
                //   justifyContent: "flex-end",
                alignItems: "flex-end",
                alignContent: "flex-end"
              }}
            >
              <Text>
                {"\u20B9"}
                {item.bill_amount}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#424242",
                  marginTop: 5,
                  textTransform: "capitalize"
                }}
              >
                {item.is_paid === "yes" ? "Paid" : "Not Paid"}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: "#424242",
                  marginTop: 10,
                  textTransform: "capitalize"
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: "600",
            color: "#424242"
          }}
        >
          Orders List
        </Text>
        <FlatList
          data={dataX}
          //data defined in constructor
          // ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* Bottom for order details */}

      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View*/}
        {/* <View></View> */}

        <Cart />
      </BottomSheet>
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
)(Order);

const dataX = [
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "accepted", // accepted, out for delivery, delivered,
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
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "out for delivery", // accepted, out for delivery, delivered,
    restaurant: {
      name: "China House",
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
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "delivered", // accepted, out for delivery, delivered,
    restaurant: {
      name: "Yalla Yalla",
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
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "no",
    payment_mode: "on line",
    status: "delivered", // accepted, out for delivery, delivered,
    restaurant: {
      name: "Fit Fab",
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
  }
];

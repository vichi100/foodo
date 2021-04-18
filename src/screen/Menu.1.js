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
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";

const Menu = props => {
  const [search, setSearch] = useState("");
  const [headerTitle, setHeaderTitle] = useState("Default Title");
  const [value, setValue] = useState(0);
  const [orderCart, setOrderCart] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    console.log("props.restaurantDetails: ", props.restaurantDetails);
    if (props.restaurantDetails) {
      props.navigation.setOptions({
        title: props.restaurantDetails.name
      });
    }
  }, [props.restaurantDetails]);

  const itemAdded = item => {
    setTotalCost(20);
  };

  const itemRemoved = item => {
    setTotalCost(20);
  };

  const ItemView = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
          //   paddingBottom: 20,
          shadowOpacity: 0.0015 * 5 + 0.18,
          shadowRadius: 0.54 * 5,
          shadowOffset: {
            height: 0.6 * 5
          },
          backgroundColor: "#ffffff",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#eeeeee"
        }}
      >
        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Image
              style={{ width: 12, height: 12, marginTop: 3, marginLeft: 10 }}
              source={require("../../assets/images/nonveg.png")}
            />
          </View>

          <Text style={{ paddingTop: 5, color: "#616161" }}>{"\u20B9"}200</Text>
          <View style={{ marginTop: 15 }}></View>
        </View>
        {/* <View
          style={{
            position: "absolute",
            bottom: -5,
            left: -15,
            elevation: 10
          }}
        >
          <Image
            style={{ width: 60, height: 60, marginTop: 3, marginLeft: 10 }}
            source={require("../../assets/images/bestseller.png")}
          />
        </View> */}
        {item.image ? (
          <View style={{ marginBottom: 20 }}>
            <Image
              source={{
                uri: item.image
              }}
              style={{
                height: 100,
                width: 120,
                resizeMode: "cover",
                margin: 5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                overflow: "hidden"
              }}
            />
            <View style={{ position: "absolute", bottom: -10, left: 15 }}>
              <InputSpinner
                value={value}
                style={Styles.spinner}
                skin="clean"
                max={10}
                colorMax={"#f04048"}
                colorMin={"#c8e6c9"}
                width={100}
                height={40}
                editable={false}
                onDecrease={() => itemAdded(item)}
                onIncrease={() => itemRemoved(item)}
                // buttonTextColor={"#ffffff"}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              marginTop: 15,
              right: 8
            }}
          >
            <InputSpinner
              value={value}
              style={Styles.spinner}
              skin="clean"
              max={99}
              colorMax={"#f04048"}
              colorMin={"#c8e6c9"}
              width={100}
              height={40}
              editable={false}
            />
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flexDirection: "column" }}>
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
            placeholder="Search by dish name"
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
        {totalCost > 0 ? (
          <View
            style={{
              backgroundColor: "#ffcc80",
              position: "absolute",
              bottom: 100
            }}
          >
            <View>
              <Text>3 Items</Text>
              <Text> | {totalCost}</Text>
            </View>
          </View>
        ) : null}
      </View>
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
)(Menu);

const dataX = [
  {
    name: "Chicken biryani",
    image: "http://placeimg.com/640/480/any",
    cost: {
      full: "320",
      half: "280"
    },
    veg: "no",
    ingredients: "",
    description: "",
    rating: ""
  },
  {
    name: "Veg pullao",
    image: "http://placeimg.com/640/480/any",
    cost: {
      full: "320",
      half: "280"
    },
    veg: "yes",
    ingredients: "",
    description: "",
    rating: ""
  },
  {
    name: "Dal Makhani",
    image: "",
    cost: {
      full: "320",
      half: "280"
    },
    veg: "yes",
    ingredients: "",
    description: "",
    rating: ""
  }
];

// if (orderCart === null) {
//   orderCart = {
//     restaurant: {
//       name: "",
//       id: "",
//       city: "",
//       mobile: "9833097595",
//       address: "",

//     },
//     customer: {
//       name: "",
//       id: "",
//       mobile: "",
//       address: "",
//       latlong: ""
//     },
//     items: [
//       {
//         id: "",
//         name: "",
//         veg: "no",
//         cost: "250",
//         quantity: "full",
//         count: "1"

//       }
//     ]
//   }
// }

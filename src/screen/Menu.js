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
import axios from 'axios';
import { SERVER_URL } from "./Constant";
import { camalize } from "./Methods"

const Menu = props => {
  const { navigation } = props;
  const { item } = props.route.params;
  const [search, setSearch] = useState("");
  const [headerTitle, setHeaderTitle] = useState("Default Title");
  const [value, setValue] = useState(0);
  const [orderCart, setOrderCart] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // console.log("props.restaurantDetails: ", item);
    if (props.restaurantDetails) {
      props.navigation.setOptions({
        title: props.restaurantDetails.name
      });
    }
  }, [props.restaurantDetails]);

  useEffect(() => {
    getMenuByRestaurantId(item.id)
  }, [item]);

  const getMenuByRestaurantId = (restaurantId) => {
    const obj = {
      restaurant_id: restaurantId
    };
    axios(SERVER_URL + '/getMenuByRestaurantId', {
      method: 'post',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json'
      },
      data: obj
    }).then(
      (response) => {
        // console.log(response.data);
        if (response.data) {
          console.log(response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const itemAdded = item => {
    setTotalCost(20);
  };

  const itemRemoved = item => {
    setTotalCost(20);
  };

  const goToCart = () => {
    navigation.navigate("Cart");
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
        <View
          style={{ marginLeft: 20, marginTop: 15, minHeight: 90, width: "50%" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Image
              style={{ width: 12, height: 12, marginTop: 3, marginLeft: 10 }}
              source={require("../../assets/images/nonveg.png")}
            />
          </View>

          <Text style={{ paddingTop: 5, color: "#616161" }}>{"\u20B9"}200</Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              bottom: 5,
              position: "absolute"
            }}
          >
            <MaterialIcons name="star" color={"#ff9100"} size={15} />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 13 }}>4.3</Text>
              <Text style={{ color: "#0277bd", fontSize: 13 }}>
                {" "}
                | 4.1 rating by ur frnds
              </Text>
            </View>
          </View>
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
                height={30}
                editable={false}
                onDecrease={() => itemRemoved(item)}
                onIncrease={() => itemAdded(item)}
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
              height={30}
              editable={false}
              onDecrease={() => itemRemoved(item)}
              onIncrease={() => itemAdded(item)}
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
      </View>
      {totalCost > 0 ? (
        <View
          style={{
            backgroundColor: "#ffcc80",
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 50,
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingTop: 15, color: "#424242" }}>3 Items</Text>
            <Text style={{ paddingTop: 15, color: "#424242" }}>
              {" "}
              | {"\u20B9"}239
            </Text>
          </View>
          <TouchableOpacity onPress={() => goToCart()}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 10,
                  paddingTop: 15,
                  fontWeight: "600",
                  color: "#424242"
                }}
              >
                VIEW CART
              </Text>
              <View style={{ paddingTop: 10 }}>
                <Entypo name="shopping-bag" color={"#424242"} size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
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

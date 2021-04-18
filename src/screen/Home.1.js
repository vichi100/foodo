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
import * as Font from "expo-font";

const Home = props => {
  const [search, setSearch] = useState("");

  const ItemView = ({ item }) => {
    return (
      <View
        style={{
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
                fontFamily: "FiraSans-Regular",
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
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <MaterialIcons name="star" color={"#bf360c"} size={15} />
              <Text style={{ color: "#616161" }}> 4.5</Text>
            </View>
            <Text style={{ paddingTop: 5, color: "#616161" }}>
              {"\u20B9"}200 for one
            </Text>
          </View>
        </View>
      </View>
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
      </View>

      <FlatList
        data={data}
        //data defined in constructor
        // ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />

      <ScrollView>
        <View
          style={{
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
                  fontFamily: "FiraSans-Regular",
                  fontWeight: "600",
                  color: "#424242"
                }}
              >
                {data.name}
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
                {data.menu_types.join(", ")}
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
                  fontFamily: "FiraSans-Regular",
                  fontWeight: "600"
                }}
              >
                {data.name}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "600", paddingTop: 0 }}>
                {data.menu_types.join(", ")}
              </Text>
            </View>
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="grin-stars" color={"#bf360c"} size={18} />
                <Text> 4.5/5</Text>
              </View>
              <Text style={{ paddingTop: 5 }}>200 for one</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
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
                  fontFamily: "FiraSans-Regular",
                  fontWeight: "600"
                }}
              >
                {data.name}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "600", paddingTop: 0 }}>
                {data.menu_types.join(", ")}
              </Text>
            </View>
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="grin-stars" color={"#bf360c"} size={18} />
                <Text> 4.5/5</Text>
              </View>
              <Text style={{ paddingTop: 5 }}>200 for one</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const data = {
  name: "China Town",
  menu_types: ["Chinese", "Asian", "Thai"],
  location: "Versova",
  mobile: ["9833097595"],
  other_contact: ["9867614466"],
  address: "35/4 Daily market",
  latnlong: "",
  type_of: ["dine in", "take away"],
  rating: "3.8"
};
const menu = [
  {
    name: "Chicken biryani",
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

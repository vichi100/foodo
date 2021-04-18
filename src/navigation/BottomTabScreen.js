import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import IoniconsX from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import AntDesign from "react-native-vector-icons/AntDesign";

// import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeStackNav from "./HomeStackNav";
import Recommendation from "../screen/Recommendation";
import Order from "../screen/Order";
import Profile from "../screen/Profile";

// import GlobalSearchStackNav from "./GlobalSearchStackNav";
// import AddNewPropStackScreens from "./AddNewPropStackScreens";
// import ListingStackScreens from "./ListingStackScreens";
// import ContactsStackScreens from "./ContactsStackScreens";
// import Notification from "../screen/Notification";
// import NotificationStackScreens from "./NotificationStackScreens";
// import ProfileStackScreens from "./ProfileStackScreens";
// import NotificationTopTab from "./NotificationTopTab";

const BottomTabScreen = () => {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgba(0,206,209, 9)"
      inactiveColor="rgb(105,105,105)"
      barStyle={{ backgroundColor: "#ffffff", paddingBottom: 0 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <IoniconsX name="fast-food-outline" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={Recommendation}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="grin-tongue" color={color} size={25} />
          )
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        title="Orders"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="filetext1" color={color} size={24} />
          )
        }}
      />
      {/* <Tab.Screen
        name="Add"
        component={AddNewPropStackScreens}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-grid-plus-outline"
              color={color}
              size={26}
            />
          )
        }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BottomTabScreen;

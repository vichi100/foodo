import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Menu from "../screen/Menu";
import Cart from "../screen/Cart";

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerBackTitleVisible: false,
        headerTintColor: "rgba(105,105,105, .9)"
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home!",
          tabBarVisible: false,
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Menu"
        component={Menu}
        options={{ tabBarLabel: "Home!", tabBarVisible: false }}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarLabel: "Bill Details", tabBarVisible: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;

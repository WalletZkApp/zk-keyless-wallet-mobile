import "react-native-gesture-handler";
import Activity from "./activity";
import Wallet from "./wallet";
import Menu from "./menu";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext, useState } from "react";
import { themeContext } from "../../context/theme_context";
import SwapBottomSheet from "./swap";
import ComingSoon from "../comingsoon";

const Tab = createBottomTabNavigator();

export default function Feature() {
  const [swapShow, setSwapShow] = useState(false);
  const { darkMode, primaryBorder } = useContext(themeContext);
  return (
    <>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: darkMode ? "#23272A" : "white",
            borderTopColor: primaryBorder,
          },
          tabBarItemStyle: {},
          tabBarActiveTintColor: "#804CDB",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="receipt" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Swap"
          component={Activity}
          options={{
            tabBarButton: ({ onPress }) => (
              <TouchableOpacity
                onPress={() => {
                  setSwapShow(true);
                }}
              >
                <View
                  style={{
                    backgroundColor: "#804CDB",
                    marginTop: 3,
                    padding: 6,
                    paddingHorizontal: 8,
                    borderRadius: 50,
                    marginHorizontal: 10,
                    elevation: 3,
                  }}
                >
                  <Ionicons name="ios-swap-vertical" size={26} color="white" />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Staking"
          component={ComingSoon}
          options={{
            tabBarLabel: "Staking",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="trending-up"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      {swapShow && <SwapBottomSheet show={swapShow} setShow={setSwapShow} />}
    </>
  );
}

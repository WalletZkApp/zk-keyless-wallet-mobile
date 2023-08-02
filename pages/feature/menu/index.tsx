import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch } from "react-native";
import { themeContext } from "../../../context/theme_context";
import * as Clipboard from "expo-clipboard";
import { Snackbar } from "react-native-paper";

export default function Menu() {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const {
    darkMode,
    changeMode,
    primaryBackground,
    secondaryBackground,
    primaryBorder,
    primaryFont,
  } = useContext(themeContext);
  const [smartContract, setSmartContract] = useState("B62qrr9v6xxw...EPcS");
  const navigation = useNavigation<any>();
  const [visible, setVisible] = useState(false);

  const menuList = [
    {
      icon: <Ionicons color={primaryFont} size={30} name="receipt-outline" />,
      label: "Activity",
      href: "Activity",
    },
    {
      icon: <Ionicons color={primaryFont} size={30} name="share-outline" />,
      label: "Share my Public Address",
      href: "ComingSoon",
    },
    {
      icon: <Ionicons color={primaryFont} size={30} name="eye-outline" />,
      label: "View on Minascan",
      href: "ComingSoon",
    },
    {
      icon: <Ionicons color={primaryFont} size={30} name="settings-outline" />,
      label: "Settings",
      href: "Settings",
    },
    {
      icon: (
        <Ionicons color={primaryFont} size={30} name="lock-closed-outline" />
      ),
      label: "Lock",
      href: "ComingSoon",
    },
    {
      icon: <Ionicons color={primaryFont} size={30} name="log-out-outline" />,
      label: "Sign Out",
      href: "Onboarding1",
    },
  ];

  const switchMode = async (value: boolean) => {
    changeMode(value);
    console.log(value);
    await AsyncStorage.setItem("darkMode", value.toString());
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(smartContract);
    setVisible(true);
  };

  useEffect(() => {
    const verifyNotification = async () => {
      const response = await AsyncStorage.getItem("pushNotifications");
      if (response === "true") {
        setNotificationEnabled(true);
      } else return;
    };
    verifyNotification();
  }, []);

  return (
    <>
      <ScrollView
        style={{ backgroundColor: primaryBackground }}
        className="flex-1"
      >
        <View
          style={{ backgroundColor: secondaryBackground }}
          className="h-[150px]"
        />
        <View className="pt-8 pb-5 px-5 relative">
          <View className="absolute bottom-[150%] left-[5%] bg-green-200 rounded-full">
            <Image
              style={{ height: 75, width: 75 }}
              source={require("../../../assets/images/avatar.png")}
            />
          </View>
          <Text
            style={{ color: primaryFont }}
            className="font-semibold text-[16px]"
          >
            Account 1
          </Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <View className="flex-row items-center space-x-2 mt-2">
              <Text style={{ color: primaryFont }}>{smartContract}</Text>
              <Ionicons color={primaryFont} name="copy-outline" size={16} />
            </View>
          </TouchableOpacity>
        </View>
        {!notificationEnabled && (
          <View className="flex-row items-center justify-between bg-primary mb-5 py-3 px-5">
            <Text className="text-white">Push notification not enabled</Text>
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity
                onPress={async () => {
                  await AsyncStorage.setItem("pushNotifications", "true");
                  setNotificationEnabled(true);
                }}
              >
                <View className="border border-white py-1 px-3">
                  <Text className="text-white">Enable</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setNotificationEnabled(true)}>
                <Ionicons name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View
          style={{
            backgroundColor: secondaryBackground,
            borderBottomWidth: 1,
            borderBottomColor: primaryBorder,
          }}
          className="flex-row items-center justify-between px-3 py-1"
        >
          <View className="flex-row items-center space-x-5">
            <Ionicons
              color={primaryFont}
              name={darkMode ? "moon-outline" : "sunny-outline"}
              size={30}
            />
            <Text
              style={{ color: primaryFont }}
              className="text-[16px] font-medium"
            >
              Switch Theme
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
            thumbColor={darkMode ? "#804CDB" : "#f4f3f4"}
            value={darkMode}
            onValueChange={switchMode}
          />
        </View>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate("AccountManagement");
          }}
        >
          <View
            style={{
              backgroundColor: secondaryBackground,
              borderBottomWidth: 1,
              borderBottomColor: primaryBorder,
            }}
            className="flex-row items-center justify-between p-3"
          >
            <View className="flex-row items-center space-x-5">
              <Ionicons
                color={primaryFont}
                name="person-circle-outline"
                size={30}
              />
              <Text
                style={{ color: primaryFont }}
                className="text-[16px] font-medium"
              >
                Account Management
              </Text>
            </View>
            <Ionicons color={primaryFont} name="chevron-forward" size={30} />
          </View>
        </TouchableNativeFeedback>
        {menuList.map((item) => {
          return (
            <TouchableNativeFeedback
              onPress={() => navigation.navigate(item.href)}
              key={item.label}
            >
              <View
                style={{
                  backgroundColor: secondaryBackground,
                  borderBottomWidth: 1,
                  borderBottomColor: primaryBorder,
                }}
                className="flex-row items-center justify-between p-3"
              >
                <View className="flex-row items-center space-x-5">
                  {item.icon}
                  <Text
                    style={{ color: primaryFont }}
                    className="text-[16px] font-medium"
                  >
                    {item.label}
                  </Text>
                </View>
                <Ionicons
                  color={primaryFont}
                  name="chevron-forward"
                  size={30}
                />
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={500}
        className="bg-primary"
      >
        Copied to Clipboard
      </Snackbar>
    </>
  );
}

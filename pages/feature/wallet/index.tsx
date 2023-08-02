import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";

import * as Clipboard from "expo-clipboard";
import { themeContext } from "../../../context/theme_context";
import { Button, Snackbar } from "react-native-paper";

export default function Wallet() {
  const navigation = useNavigation<any>();
  const [smartContract, setSmartContract] = useState("B6aqrr9v6xxw...EPcS");
  const { primaryBackground, secondaryBackground, primaryBorder, primaryFont } =
    useContext(themeContext);
  const [visible, setVisible] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(smartContract);
    setVisible(true);
  };

  return (
    <>
      <View
        style={{ backgroundColor: primaryBackground }}
        className="px-5 pt-12 flex-1"
      >
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate("PushNotifications")}
          >
            <Ionicons
              color={primaryFont}
              name="notifications-outline"
              size={24}
            />
          </TouchableOpacity>
          <Text
            style={{ color: primaryFont }}
            className="text-[16px] font-medium"
          >
            Account 1
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("QRScanner")}>
            <MaterialCommunityIcons
              color={primaryFont}
              name="line-scan"
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View className="items-center mt-5 space-y-5">
          <Image source={require("../../../assets/images/avatar.png")} />
          <View className="flex-row items-center space-x-2">
            <Text
              style={{ color: primaryFont }}
              className="text-[36px] font-bold"
            >
              $5671
            </Text>
            <Ionicons name="ios-trending-up" size={30} color="green" />
          </View>
          <TouchableOpacity onPress={copyToClipboard}>
            <View
              style={{ backgroundColor: secondaryBackground }}
              className="flex-row items-center space-x-2 p-2 px-3 rounded-md"
            >
              <Text style={{ color: primaryFont }}>{smartContract}</Text>
              <Ionicons color={primaryFont} name="copy-outline" size={16} />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between mt-8">
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Payment")}
          >
            <View className="bg-primary p-2 px-5 rounded-full flex-1">
              <Text className="text-white text-center text-[16px] font-semibold">
                Top Up
              </Text>
            </View>
          </TouchableNativeFeedback>
          <View className="w-[20px]"></View>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Send", { smartcontract: "" })}
          >
            <View className="bg-primary p-2 px-5 rounded-full flex-1">
              <Text className="text-white text-center text-[16px] font-semibold">
                Send
              </Text>
            </View>
          </TouchableNativeFeedback>
          <View className="w-[20px]"></View>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Receive")}
          >
            <View className="bg-primary p-2 px-5 rounded-full flex-1">
              <Text className="text-white text-center text-[16px] font-semibold">
                Receive
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View className="flex-1 mt-8 rounded-t-xl overflow-hidden">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: secondaryBackground,
                    borderBottomWidth: 1,
                    borderBottomColor: primaryBorder,
                  }}
                  className="p-5"
                >
                  <View className="flex-row justify-between">
                    <View className="flex-row space-x-3">
                      <Image source={item.icon} />
                      <View>
                        <Text
                          style={{ color: primaryFont }}
                          className="font-bold text-[16px]"
                        >
                          {item.label}
                        </Text>
                        <View className="flex-row items-center space-x-2">
                          <Text style={{ color: primaryFont }}>
                            {item.value}
                          </Text>
                          <Text
                            style={{ color: primaryFont }}
                            className={`${
                              item.change >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            } font-bold`}
                          >
                            {item.change}%
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="items-end">
                      <Text
                        style={{ color: primaryFont }}
                        className="font-bold text-[16px]"
                      >
                        {item.balance}
                      </Text>
                      <Text style={{ color: primaryFont }}>${item.usd}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
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

const transactions = [
  {
    id: 1,
    icon: require("../../../assets/images/mina.png"),
    label: "Mina",
    value: 0.5671,
    change: 1.03,
    balance: "500 MINA",
    usd: 5671,
  },
  {
    id: 2,
    icon: require("../../../assets/images/ethereum.png"),
    label: "Ethereum",
    value: 0.5671,
    change: 1.03,
    balance: "100 ETH",
    usd: 5671,
  },
  {
    id: 3,
    icon: require("../../../assets/images/mina.png"),
    label: "Mina",
    value: 0.5671,
    change: -0.53,
    balance: 10000,
    usd: 5671,
  },
  {
    id: 4,
    icon: require("../../../assets/images/mina.png"),
    label: "Mina",
    value: 0.5671,
    change: 1.03,
    balance: 10000,
    usd: 5671,
  },
  {
    id: 5,
    icon: require("../../../assets/images/mina.png"),
    label: "Mina",
    value: 0.5671,
    change: 1.03,
    balance: 10000,
    usd: 5671,
  },
  {
    id: 6,
    icon: require("../../../assets/images/ethereum.png"),
    label: "Ethereum",
    value: 1852.37,
    change: 2.07,
    balance: "200 ETH",
    usd: 202.3,
  },
];

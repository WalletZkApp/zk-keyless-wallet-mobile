import { View, Text, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { themeContext } from "../../../../../context/theme_context";

export default function PushNotifications() {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  const navigation = useNavigation<any>();
  const [pushNotifications, setPushNotifications] = useState(false);
  const [sentReceived, setSentReceived] = useState(false);
  const [productAnnouncements, setProductAnnouncements] = useState(false);

  const getInformation = async () => {
    const push = await AsyncStorage.getItem("pushNotifications");
    const sent = await AsyncStorage.getItem("sentReceived");
    const product = await AsyncStorage.getItem("productAnnouncements");
    if (push !== null) {
      setPushNotifications(JSON.parse(push));
    }
    if (sent !== null) {
      setSentReceived(JSON.parse(sent));
    }
    if (product !== null) {
      setProductAnnouncements(JSON.parse(product));
    }
  };

  const switchHandler = async (value: boolean, type: string) => {
    await AsyncStorage.setItem(type, value.toString());
    if (type === "pushNotifications") {
      setPushNotifications(value);
    } else if (type === "sentReceived") {
      setSentReceived(value);
    } else if (type === "productAnnouncements") {
      setProductAnnouncements(value);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 py-5"
    >
      <View className="flex-row items-center space-x-5 px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons color={primaryFont} name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text style={{ color: primaryFont }} className="text-[20px]">
          Push Notifications
        </Text>
      </View>
      <View
        style={{ borderColor: primaryBorder }}
        className="p-5 border-b flex-row items-center justify-between"
      >
        <Text style={{ color: primaryFont }} className="text-[16px]">
          Allow Push Notifications
        </Text>
        <Switch
          trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
          thumbColor={pushNotifications ? "#804CDB" : "#f4f3f4"}
          value={pushNotifications}
          onValueChange={(value) => switchHandler(value, "pushNotifications")}
        />
      </View>
      <View
        style={{ borderColor: primaryBorder }}
        className="p-5 border-b flex-row items-center justify-between"
      >
        <View>
          <Text style={{ color: primaryFont }} className="text-[16px]">
            Sent and Received
          </Text>
          <Text style={{ color: primaryFont }} className="text-[10px] mt-2">
            You will be notified for sent and received transactions
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
          thumbColor={sentReceived ? "#804CDB" : "#f4f3f4"}
          value={sentReceived}
          onValueChange={(value) => switchHandler(value, "sentReceived")}
        />
      </View>
      <View
        style={{ borderColor: primaryBorder }}
        className="p-5 border-b flex-row items-center justify-between"
      >
        <View>
          <Text style={{ color: primaryFont }} className="text-[16px]">
            Product Announcements
          </Text>
          <Text style={{ color: primaryFont }} className="text-[10px] mt-2">
            Be the first to know about new features
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
          thumbColor={productAnnouncements ? "#804CDB" : "#f4f3f4"}
          value={productAnnouncements}
          onValueChange={(value) =>
            switchHandler(value, "productAnnouncements")
          }
        />
      </View>
    </SafeAreaView>
  );
}

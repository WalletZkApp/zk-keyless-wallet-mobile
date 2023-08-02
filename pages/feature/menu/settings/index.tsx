import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { themeContext } from "../../../../context/theme_context";

export default function Settings() {
  const navigation = useNavigation<any>();
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);

  const settings = [
    {
      icon: (
        <Ionicons color={primaryFont} name="lock-closed-outline" size={24} />
      ),
      label: "Security",
      href: "Security",
      hint: "",
    },
    {
      icon: (
        <Ionicons color={primaryFont} name="notifications-outline" size={24} />
      ),
      label: "Push Notifications",
      href: "PushNotifications",
      hint: "",
    },
    {
      icon: <MaterialCommunityIcons color={primaryFont} name="web" size={24} />,
      label: "Network",
      href: "Settings",
      hint: "Mainnet",
    },
    {
      icon: <Ionicons color={primaryFont} name="shield-checkmark" size={24} />,
      label: "Language",
      href: "Security",
      hint: "English",
    },
    {
      icon: (
        <MaterialCommunityIcons
          color={primaryFont}
          name="currency-usd"
          size={24}
        />
      ),
      label: "Currency",
      href: "Security",
      hint: "USD",
    },
    {
      icon: <AntDesign color={primaryFont} name="contacts" size={24} />,
      label: "Address Book",
      href: "Security",
      hint: "0",
    },
    {
      icon: (
        <Ionicons
          color={primaryFont}
          name="information-circle-outline"
          size={24}
        />
      ),
      label: "About",
      href: "Security",
      hint: "",
    },
  ];

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="py-5 flex-1"
    >
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons color={primaryFont} name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text
          style={{ color: primaryFont }}
          className="text-[20px] font-semibold"
        >
          Settings
        </Text>
        <Ionicons name="chevron-back" size={30} color="transparent" />
      </View>
      {settings.map((x) => {
        return (
          <TouchableNativeFeedback
            key={x.label}
            onPress={() => navigation.navigate(x.href)}
          >
            <View
              style={{ borderBottomColor: primaryBorder }}
              className="p-5 border-b flex-row items-center justify-between"
            >
              <View className="flex-row items-center space-x-5">
                {x.icon}
                <Text style={{ color: primaryFont }}>{x.label}</Text>
              </View>
              <View className="flex-row items-center space-x-3">
                <Text style={{ color: primaryFont }} className="font-light">
                  {x.hint}
                </Text>
                <Ionicons
                  color={primaryFont}
                  name="chevron-forward"
                  size={24}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeContext } from "../../../../../context/theme_context";

export default function Security() {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  const navigation = useNavigation<any>();
  const [biometric, setBiometric] = useState(true);

  const getBiometric = async () => {
    const biometricEnabled = await AsyncStorage.getItem("biometric");
    if (biometricEnabled === null || biometricEnabled === "false") {
      setBiometric(false);
    } else {
      setBiometric(true);
    }
  };

  const handleBiometric = async (value: boolean) => {
    setBiometric(value);
    await AsyncStorage.setItem("biometric", value.toString());
  };

  useEffect(() => {
    getBiometric();
  }, []);

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
          Security
        </Text>
        <Ionicons name="chevron-back" size={30} color="transparent" />
      </View>
      {security.map((x) => {
        return (
          <TouchableNativeFeedback
            key={x.label}
            onPress={() => navigation.navigate(x.href)}
          >
            <View
              style={{ borderBottomColor: primaryBorder }}
              className="flex-row items-center justify-between p-5 border-b"
            >
              <Text style={{ color: primaryFont }}>{x.label}</Text>
              <Ionicons color={primaryFont} name="chevron-forward" size={24} />
            </View>
          </TouchableNativeFeedback>
        );
      })}
      <View className="p-5 flex-row items-center justify-between">
        <Text style={{ color: primaryFont }}>Biometric Authentication</Text>
        <Switch
          trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
          thumbColor={biometric ? "#804CDB" : "#f4f3f4"}
          value={biometric}
          onValueChange={(value) => handleBiometric(value)}
        />
      </View>
    </SafeAreaView>
  );
}

const security = [
  {
    label: "Change Security",
    href: "ChangeSecurity",
  },
  {
    label: "Google Authentication",
    href: "GoogleAuthentication",
  },
  {
    label: "Guardian",
    href: "GuardianOnboarding1",
  },
];

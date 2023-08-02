import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  TouchableNativeFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useContext, useState } from "react";
import { themeContext } from "../../../../../../context/theme_context";

export default function Guardian() {
  const { primaryBackground, primaryFont } = useContext(themeContext);
  const navigation = useNavigation<any>();
  const [guardianSwitches, setGuardianSwitches] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSwitch = (label: string, value: boolean) => {
    setGuardianSwitches((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5"
    >
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.navigate("Security")}>
          <Ionicons color={primaryFont} name="chevron-back" size={24} />
        </TouchableOpacity>
        <Text
          style={{ color: primaryFont }}
          className="text-[20px] font-semibold"
        >
          Choose your guardians
        </Text>
        <Ionicons name="chevron-back" size={24} color="transparent" />
      </View>
      <View className="mt-8">
        <Text
          style={{ color: primaryFont }}
          className="text-[16px] font-semibold"
        >
          Main guardians
        </Text>
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-3">
            <Image
              source={require("../../../../../../assets/images/guardians/auro_wallet.png")}
            />
            <View>
              <Text style={{ color: primaryFont }} className="font-semibold">
                Auro Wallet
              </Text>
              <Text style={{ color: primaryFont }} className="mt-1 font-medium">
                Enabled 22 May 2023
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Switch
              trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
              thumbColor={
                guardianSwitches["Auro Wallet"] ? "#804CDB" : "#f4f3f4"
              }
              value={guardianSwitches["Auro Wallet"]}
              onValueChange={(value) => toggleSwitch("Auro Wallet", value)}
            />
            {/* <Ionicons name="menu" size={30} /> */}
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{ color: primaryFont }}
          className="text-[16px] font-semibold mt-8"
        >
          We've proposed the following guardians
        </Text>
        {guardians.map((x) => {
          return (
            <View
              key={x.label}
              className="flex-row items-center justify-between mt-5"
            >
              <View className="flex-row items-center space-x-2">
                <Image source={x.icon} />
                <View>
                  <Text
                    style={{ color: primaryFont }}
                    className="font-semibold"
                  >
                    {x.label}
                  </Text>
                  <Text
                    style={{ color: primaryFont }}
                    className="mt-1 font-medium"
                  >
                    Enabled {x.enabled}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Switch
                  trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
                  thumbColor={guardianSwitches[x.label] ? "#804CDB" : "#f4f3f4"}
                  value={guardianSwitches[x.label]}
                  onValueChange={(value) => toggleSwitch(x.label, value)}
                />
              </View>
            </View>
          );
        })}
        <View className="flex-row justify-end mt-5">
          <TouchableOpacity>
            <View className="bg-blue-100 py-2 px-4 rounded-full flex-row items-center space-x-1">
              <Ionicons name="add" size={20} color="#1D7AFC" />
              <Text className="text-[#1D7AFC] font-semibold">Add New</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableNativeFeedback>
        <View
          className="w-full py-3 bg-primary mt-auto"
          style={{ elevation: 10 }}
        >
          <Text className="text-center text-white font-semibold text-[16px]">
            NEXT
          </Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const guardians = [
  {
    icon: require("../../../../../../assets/images/guardians/guardian_1.png"),
    label: "ZK Wallet Company",
    enabled: "21 may 2023",
  },
  {
    icon: require("../../../../../../assets/images/guardians/guardian_2.png"),
    label: "Dean Hutchinson",
    enabled: "22 may 2023",
  },
  {
    icon: require("../../../../../../assets/images/guardians/guardian_3.png"),
    label: "Vanessa Lee",
    enabled: "22 may 2023",
  },
];

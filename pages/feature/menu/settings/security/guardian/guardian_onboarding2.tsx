import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../../../components/custom_button";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { themeContext } from "../../../../../../context/theme_context";

export default function GuardianOnboarding2() {
  const navigation = useNavigation<any>();
  const { primaryBackground, primaryFont } = useContext(themeContext);
  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5 items-center justify-between"
    >
      <View className="w-full">
        <View className="flex-row items-center justify-between w-full">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <Ionicons color={primaryFont} name="chevron-back" size={30} />
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Guardian")}>
              <View className="bg-[#EEAC18] py-2 px-4 rounded-full">
                <Text className="text-white">SKIP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-16">
          <Text
            style={{ color: primaryFont }}
            className="text-center font-semibold text-[20px]"
          >
            ZK WALLET COMPANY as Guardian
          </Text>
          <Text style={{ color: primaryFont }} className="mt-3 text-center">
            ??
          </Text>
        </View>
      </View>
      <View>
        <Image source={require("../../../../../../assets/images/logo.png")} />
      </View>
      <View>
        <View className="flex-row items-center justify-center mb-12 space-x-1">
          <View className="h-[3px] w-[24px] bg-gray-200"></View>
          <View className="h-[3px] w-[24px] bg-primary"></View>
          <View className="h-[3px] w-[24px] bg-gray-200"></View>
        </View>
        <CustomButton label="NEXT" target="GuardianOnboarding3" />
      </View>
    </SafeAreaView>
  );
}

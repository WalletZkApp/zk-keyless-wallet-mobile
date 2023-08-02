import {
  View,
  Text,
  TouchableNativeFeedback,
  useWindowDimensions,
  Image,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding2() {
  const navigation = useNavigation<any>();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1 flex-col bg-white">
      <View
        style={{
          borderTopWidth: height / 3,
          transform: [{ translateY: 0 }],
          borderTopColor: "#EDAD19",
          borderRightWidth: 1000,
          borderRightColor: "white",
          position: "absolute",
        }}
      />
      <View className="p-5">
        <View className="items-end w-full flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={"white"} size={30} />
          </TouchableOpacity>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("CreateWallet")}
          >
            <View className="bg-white py-2 rounded-full px-4">
              <Text className="tracking-widest">SKIP</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ marginTop: height / 4 }} className="justify-end">
          <View className="flex-col items-center">
            <Text className="text-[24px] font-medium">SOCIAL RECOVERY</Text>
            <Text className="text-center mt-3 text-[16px]">
              Users can restore access to their smart contract wallet using
              zero-knowledge proof, without revealing any information about the
              social contracts or their guardians
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          left: width / 3.5,
          bottom: Platform.OS === "ios" ? height / 10 : height / 14,
        }}
        className="mt-5 absolute"
      >
        <Image
          source={require("../../assets/images/onboarding_2.png")}
          alt=""
        />
      </View>
      <View className="mt-auto flex-col items-center">
        <View className="mb-14 flex-row space-x-1">
          <View className="w-[30px] h-[5px] bg-white"></View>
          <View className="w-[30px] h-[5px] bg-primary"></View>
          <View className="w-[30px] h-[5px] bg-white"></View>
        </View>
        <View className="w-full max-w-[280px] ">
          <View className="relative">
            <TouchableNativeFeedback
              onPress={() => navigation.navigate("Onboarding3")}
            >
              <View
                className="mb-10 w-full bg-primary py-2"
                style={{ elevation: 10 }}
              >
                <Text className="text-center text-white text-[16px] font-semibold">
                  NEXT
                </Text>
              </View>
            </TouchableNativeFeedback>
            <Image
              className="absolute bottom-[18px] left-[-0.6%]"
              source={require("../../assets/images/triangle.png")}
              alt=""
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

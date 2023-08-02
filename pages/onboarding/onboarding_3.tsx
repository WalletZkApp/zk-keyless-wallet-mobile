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

export default function Onboarding3() {
  const navigation = useNavigation<any>();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1 flex-col bg-white">
      <View
        style={{
          borderTopWidth: height / 7,
          transform: [{ translateY: 0 }],
          borderTopColor: "#EDAD19",
          borderRightWidth: 500,
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
            <View className="bg-gray-200 py-2 rounded-full px-4">
              <Text className="tracking-widest">SKIP</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ marginTop: height / 12 }} className="justify-end">
          <View className="flex-col items-center">
            <Text className="text-[24px] font-medium">SHAMIR SERVICE</Text>
            <Text className="text-center mt-3 text-[16px]">
              Protect your secret with our advanced encryption technology. We
              utilizes the groundbreaking Shamir's Secret Sharing algorithm.
              which splits your data into multiple shares and distributes them
              across different devices or guardians.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          left: "30%",
          bottom: Platform.OS === "ios" ? 30 : 0,
        }}
        className="mt-5 absolute"
      >
        <Image
          source={require("../../assets/images/onboarding_3.png")}
          alt=""
        />
      </View>
      <View className="mt-auto flex-col items-center">
        <View className="mb-12 flex-row space-x-1">
          <View className="w-[30px] h-[5px] bg-white"></View>
          <View className="w-[30px] h-[5px] bg-white"></View>
          <View className="w-[30px] h-[5px] bg-primary"></View>
        </View>
        <View className="w-full max-w-[280px] ">
          <View className="relative">
            <TouchableNativeFeedback
              onPress={() => navigation.navigate("CreateWallet")}
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

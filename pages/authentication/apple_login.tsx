import { View, Text, TouchableNativeFeedback } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppleLogin() {
  const navigation = useNavigation<any>();
  const [staySigned, setStaySigned] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-between p-5 pb-12 bg-white">
      <View className="">
        <Image
          style={{ height: 50, width: 50, resizeMode: "contain" }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View className="items-center">
        <Text className="text-[20px]">Sign In with your Apple ID</Text>
        <Image
          className="mt-10"
          source={require("../../assets/images/apple_logo.png")}
        />
        <View className="flex-row items-center w-full border border-gray-400 px-3 py-2 rounded-md mt-16">
          <Text className="w-[80px] text-[16px] font-semibold">Apple ID</Text>
          <TextInput placeholder="Apple ID" />
        </View>
        <View className="flex-row items-center w-full border border-gray-400 px-3 py-2 rounded-md mt-3">
          <Text className="w-[80px] text-[16px] font-semibold">Password</Text>
          <TextInput placeholder="Password" />
        </View>
        <Text className="mt-3 text-blue-500">
          Forgot your Apple ID or password ?
        </Text>
      </View>
      <View className="mt-5">
        <TouchableNativeFeedback onPress={() => navigation.navigate("Feature")}>
          <View
            className="w-full py-3 bg-primary rounded-md"
            style={{ elevation: 10 }}
          >
            <Text className="text-white font-bold text-center">Sign In</Text>
          </View>
        </TouchableNativeFeedback>
        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center space-x-2">
            <Checkbox
              onValueChange={(e) => setStaySigned(e)}
              value={staySigned}
              color={staySigned ? "#4630EB" : undefined}
            />
            <Text>Stay Signed In</Text>
          </View>
          <View>
            <Text className="text-blue-600 font-bold">Need Help ?</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

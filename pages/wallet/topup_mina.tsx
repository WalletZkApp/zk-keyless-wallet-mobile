import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TopupMina() {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState("10");
  return (
    <SafeAreaView className="bg-primary flex-1 p-5 justify-between">
      <View className="flex-row items-center justify-between">
        <View className="w-[70px]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-[20px]">Top Up MINA</Text>
        <TouchableOpacity>
          <View className="py-2 bg-white rounded-full w-[70px] flex justify-center items-center">
            <Text>USD</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-center space-x-1">
        <Text className="text-[36px] text-white">$</Text>
        <TextInput
          className="text-[42px] text-white"
          value={value.toString()}
          onChangeText={(e) => setValue(e)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <TouchableNativeFeedback>
          <View className="w-full flex-row items-center justify-center space-x-2 py-3 bg-purple-900">
            <Text className="font-bold text-white">
              UAB FINANSINESS PASLAUG ...{" "}
            </Text>
            <Image source={require("../../assets/images/visa_white.png")} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("SocialLogin")}
        >
          <View className="mt-5 w-full bg-white py-3 rounded-md">
            <Text className="text-center text-purple-800 font-bold">
              ADD MONEY
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-white p-5 pb-12 justify-between">
      <View style={{ height: 100 }}></View>
      <View className="items-center mb-5">
        <Image source={require("../../assets/images/logo.png")} alt="" />
      </View>
      <View>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          placeholder="Email Address"
          className="p-2 border border-gray-400"
        />
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("VerifyCode")}
        >
          <View
            style={{ elevation: 10 }}
            className="mt-16 py-2 bg-primary w-full rounded-md flex-row items-center justify-center space-x-2"
          >
            <MaterialIcons name="email" color="white" size={24} />
            <Text className="text-white font-semibold">
              Continue with Email
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="flex-row justify-center mt-3">
            <View className="flex-row items-center justify-center space-x-1 border-b ">
              <MaterialIcons name="arrow-back" size={24} color="#804CDB" />
              <Text className="text-primary font-bold">
                Other Login Options
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

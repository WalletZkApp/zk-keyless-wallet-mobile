import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetupPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(true);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-white p-5 pb-12 justify-between">
      <View className="items-center mt-12">
        <Image
          style={{ resizeMode: "contain", height: 100 }}
          source={require("../../assets/images/logo.png")}
        />
        <Text className="text-[20px] mt-12">Setup your password</Text>
      </View>
      <View className="mt-5">
        <View>
          <View className="flex-row items-center justify-between">
            <Text>Password</Text>
            <Pressable onPress={() => setShow(!show)}>
              <Text className="text-blue-600">{show ? "Show" : "Hide"}</Text>
            </Pressable>
          </View>
          <TextInput
            onChangeText={(e) => setPassword(e)}
            className="border border-gray-300 p-2 mt-2"
            placeholder="Input Password"
            secureTextEntry={!show}
          />
        </View>
        <View className="mt-5">
          <Text>Confirm password</Text>
          <TextInput
            onChangeText={(e) => setConfirmPassword(e)}
            className="border border-gray-300 p-2 mt-2"
            placeholder="Input Confirm Password"
            secureTextEntry={!show}
          />
        </View>
      </View>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("EmailLogin")}
      >
        <View
          style={{ elevation: 10 }}
          className="rounded-md w-full p-3 bg-primary"
        >
          <Text className="text-white text-center font-semibold">
            Create Wallet
          </Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

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
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmailLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [show, setShow] = useState(true);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-white p-5 pb-12 justify-between">
      <View className="items-center mt-12">
        <Image
          style={{ resizeMode: "contain", height: 100 }}
          source={require("../../assets/images/logo.png")}
        />
        <Text className="text-[20px] mt-12">Sign in with username/email</Text>
      </View>
      <View className="mt-5">
        <View>
          <Text>Username or email address</Text>
          <TextInput
            onChangeText={(e) => setUsername(e)}
            className="border border-gray-300 p-2 mt-2"
            placeholder="Input Username or Email Address"
          />
        </View>
        <View className="mt-8">
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
            secureTextEntry={show}
          />
          <View className="flex-row items-center justify-between mt-5">
            <Pressable>
              <Text className="text-blue-600 underline">
                Forgot your password ?
              </Text>
            </Pressable>
            <View className="flex-row items-center space-x-2">
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Text>Remember Me</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-5">
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("PasscodeLogin")}
        >
          <View
            style={{ elevation: 10 }}
            className="rounded-md w-full p-3 bg-primary"
          >
            <Text className="text-white text-center font-semibold text-[16px]">
              Sign In
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View className="flex-row justify-end mt-4">
          <Pressable>
            <Text className="text-blue-600 font-semibold">Need help ?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

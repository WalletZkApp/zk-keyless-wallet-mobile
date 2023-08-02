import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SocialLogin() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="flex-1 justify-between p-5 pb-12 bg-white">
      <View style={{ height: 100 }}></View>
      <View className="items-center">
        <Image
          source={require("../../assets/images/logo_v2.png")}
          style={{ height: 200, resizeMode: "contain" }}
        />
      </View>
      <View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("GoogleLogin")}
        >
          <View className="flex-row items-center space-x-3 justify-center bg-primary py-3 rounded-md">
            <Image source={require("../../assets/images/google.png")} />
            <Text className="text-white font-semibold">
              Continue with Google
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("AppleLogin")}
        >
          <View className="flex-row mt-3 items-center space-x-3 justify-center bg-white border py-3 rounded-md">
            <Image source={require("../../assets/images/apple.png")} />
            <Text className="text-black">Continue with Apple</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmailSignup")}
          className="mt-5 flex-row justify-center"
        >
          <View className="flex-row items-center border-b space-x-1 pb-1">
            <Text className="font-semibold">Continue with Email</Text>
            <Ionicons name="arrow-forward" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

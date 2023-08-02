import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { themeContext } from "../../../context/theme_context";

export default function Confirm() {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  const navigation = useNavigation<any>();
  const router = useRoute<RouteProp<{}>>();
  const { from, to, amount } = router.params;

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5"
    >
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="w-[50px]">
            <Text className="text-primary font-medium">Back</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{ color: primaryFont }}
            className="text-center text-[16px]"
          >
            Confirm
          </Text>
          <Text style={{ color: primaryFont }} className="text-center">
            Mina Mainnet
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Feature")}>
          <View className="w-[50px]">
            <Text className="text-primary font-medium">Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ color: primaryFont }} className="mt-5">
        From
      </Text>
      <View
        style={{ borderColor: primaryBorder }}
        className="mt-5 p-3 rounded-md border flex-row items-center justify-between"
      >
        <Text style={{ color: primaryFont }}>{from}</Text>
      </View>
      <Text style={{ color: primaryFont }} className="mt-5">
        To
      </Text>
      <View
        style={{ borderColor: primaryBorder }}
        className="mt-5 p-3 rounded-md border flex-row items-center justify-between"
      >
        <Text style={{ color: primaryFont }}>{to}</Text>
      </View>
      <View className="mt-8 items-center space-y-2">
        <Text style={{ color: primaryFont }} className="text-[20px]">
          AMOUNT
        </Text>
        <Text style={{ color: primaryFont }} className="text-[24px]">
          {amount} MINA
        </Text>
      </View>
      <View
        style={{ borderWidth: 1, borderColor: primaryBorder }}
        className="p-3 rounded-md flex-row justify-between mt-5"
      >
        <Text style={{ color: primaryFont }}>Total</Text>
        <Text style={{ color: primaryFont }}>{amount} MINA</Text>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Activity")}>
        <View
          style={{ elevation: 10 }}
          className="w-full py-3 bg-primary rounded-md mt-auto"
        >
          <Text className="text-white font-semibold text-[16px] text-center">
            SEND
          </Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

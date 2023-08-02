import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { themeContext } from "../../context/theme_context";

export default function Payment() {
  const navigation = useNavigation<any>();
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="p-5 flex-1"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons color={primaryFont} name="chevron-back" size={24} />
          </TouchableOpacity>
          <Text
            style={{ color: primaryFont }}
            className="text-cente text-[24px] font-bold"
          >
            Payment
          </Text>
          <Ionicons name="chevron-back" color="transparent" size={24} />
        </View>
        <Image
          style={{ resizeMode: "contain", height: 150, marginTop: 35 }}
          source={require("../../assets/images/payment.png")}
        />
        <Text
          style={{ color: primaryFont }}
          className="text-[20px] mt-4 font-medium text-center"
        >
          Increment Magazine
        </Text>
        <TouchableNativeFeedback>
          <View className="flex-row items-center space-x-2 bg-gray-800 py-3 justify-center mt-5 rounded-md">
            <Image source={require("../../assets/images/apple.png")} />
            <Text className="text-white">Pay</Text>
          </View>
        </TouchableNativeFeedback>
        <View className="flex-row items-center space-x-2 mt-5">
          <View className="flex-1 h-[1px] bg-gray-200"></View>
          <Text style={{ color: primaryFont }}>Or pay with card</Text>
          <View className="flex-1 h-[1px] bg-gray-200"></View>
        </View>
        <View>
          <TextInput
            placeholderTextColor="gray"
            style={{ color: primaryFont }}
            className="border-b border-gray-200 mt-5 py-3"
            placeholder="Email"
          />
          <Text
            style={{ color: primaryFont }}
            className="mt-5 font-semibold text-[16px]"
          >
            Card Information
          </Text>
          <View className="flex-row items-center mt-5 space-x-5">
            <View className="border-b border-gray-200 w-[80px]">
              <Text style={{ color: primaryFont }}>Number</Text>
              <View className="flex-row items-center space-x-2">
                <TextInput
                  placeholderTextColor="gray"
                  style={{ color: primaryFont }}
                  className="py-3"
                  keyboardType="numeric"
                  placeholder="MM"
                  maxLength={2}
                />
                <Text>/</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={{ color: primaryFont }}
                  className="py-3"
                  keyboardType="numeric"
                  placeholder="YYYY"
                  maxLength={4}
                />
              </View>
            </View>
            <View>
              <View className="flex-row items-center space-x-2">
                <Image source={require("../../assets/images/visa_blue.png")} />
                <Image source={require("../../assets/images/mastercard.png")} />
              </View>
              <TextInput
                placeholderTextColor="gray"
                style={{ color: primaryFont }}
                className="w-[100px] border-b border-gray-200 py-3"
                placeholder="CVC"
                keyboardType="numeric"
                maxLength={3}
              />
            </View>
          </View>
          <View className="mt-5">
            <Text style={{ color: primaryFont }}>Country or Region</Text>
            <TextInput
              placeholderTextColor="gray"
              style={{ color: primaryFont }}
              className="py-3 border-b border-gray-200"
              placeholder="ZIP Code"
            />
          </View>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("TopupMina")}
          >
            <View
              className="w-full bg-primary py-3 rounded-md mt-8"
              style={{ elevation: 15 }}
            >
              <Text className="text-white text-center text-[16px] font-semibold">
                Pay
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

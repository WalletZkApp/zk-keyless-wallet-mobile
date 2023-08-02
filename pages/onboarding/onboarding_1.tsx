import {
  View,
  Text,
  Animated,
  TouchableNativeFeedback,
  useWindowDimensions,
  Image,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding1() {
  const navigation = useNavigation<any>();
  const { width, height } = useWindowDimensions();

  const fadeAnim = useState(new Animated.Value(0))[0];
  const heightAnimation = useState(new Animated.Value(height + 1000))[0];

  useEffect(() => {
    Animated.timing(heightAnimation, {
      toValue: height / 2.5,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [heightAnimation]);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 600);
  }, [fadeAnim]);

  return (
    <SafeAreaView className="flex-1 flex-col bg-white">
      <Animated.View
        style={{
          borderTopWidth: heightAnimation,
          transform: [{ translateY: 0 }],
          borderTopColor: "#EDAD19",
          borderRightWidth: 1000,
          borderRightColor: "white",
          position: "absolute",
        }}
      />
      <View className="items-end w-full p-5">
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("CreateWallet")}
        >
          <View className="bg-white py-2 rounded-full px-4">
            <Text className="tracking-widest">SKIP</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <Animated.View
        style={{ marginTop: height / 3.5, opacity: fadeAnim }}
        className="justify-end"
      >
        <View className="flex-col items-center">
          <Text className="text-[24px] font-medium">ZK WALLET IS KEYLESS</Text>
          <Text className="text-center mt-3 text-[16px]">
            We utilize Smart OTPs, which use zero-knowledge proof, provide an
            additional layer of security.
          </Text>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          left: width / 3,
          opacity: fadeAnim,
          bottom: Platform.OS === "ios" ? height / 10 : height / 14,
        }}
        className="mt-5 absolute"
      >
        <Image
          source={require("../../assets/images/onboarding_1.png")}
          alt=""
        />
      </Animated.View>
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="mt-auto flex-col items-center"
      >
        <View className="mb-14 flex-row space-x-1">
          <View className="w-[30px] h-[5px] bg-primary"></View>
          <View className="w-[30px] h-[5px] bg-white"></View>
          <View className="w-[30px] h-[5px] bg-white"></View>
        </View>
        <View className="w-full max-w-[280px] ">
          <View className="relative">
            <TouchableNativeFeedback
              onPress={() => navigation.navigate("Onboarding2")}
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
      </Animated.View>
    </SafeAreaView>
  );
}

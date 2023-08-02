import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface button {
  label: string;
  target: string;
}

export default function CustomButton({ label, target }: button) {
  const navigation = useNavigation<any>();
  return (
    <View className="relative">
      <Image
        className="absolute bottom-[12px] left-[-0%]"
        source={require("../assets/images/triangle.png")}
        alt=""
      />
      <TouchableNativeFeedback onPress={() => navigation.navigate(target)}>
        <View
          className="mb-10 w-[280px] bg-primary py-3"
          style={{ elevation: 10 }}
        >
          <Text className="text-center text-white text-[16px] font-bold tracking-widest">
            {label}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

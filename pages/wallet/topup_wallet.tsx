import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/custom_button";

export default function TopupWallet() {
  return (
    <SafeAreaView className="flex-1 justify-center pb-32 justify-between bg-white">
      <View className="relative">
        <Image
          className="ml-3"
          source={require("../../assets/images/icons/icon_1.png")}
        />
        <Image
          className="mt-5 ml-16"
          source={require("../../assets/images/icons/icon_2.png")}
        />
        <Image
          className="mt-8 ml-2"
          source={require("../../assets/images/icons/icon_1.png")}
        />
      </View>

      <Image
        className="absolute top-[30%] left-[20%]"
        source={require("../../assets/images/icons/icon_3.png")}
      />
      <Image
        className="absolute top-[35%] left-[40%]"
        source={require("../../assets/images/icons/icon_4.png")}
      />
      <Image
        className="absolute top-[45%] left-[10%]"
        source={require("../../assets/images/icons/icon_5.png")}
      />

      <View className="flex flex-col items-center space-y-5">
        <Image source={require("../../assets/images/logo.png")} />
        <Text className="text-[32px] tracking-widest text-font">ZK WALLET</Text>
      </View>
      <View className="items-center">
        <Text className="text-[16px] mb-3">
          You need $ to deploy a new wallet !
        </Text>
        <CustomButton label="TOP UP" target="Payment" />
      </View>
    </SafeAreaView>
  );
}

import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/custom_button";

export default function CreateWallet() {
  return (
    <SafeAreaView className="flex-1 justify-center justify-between bg-white pb-12">
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
      <View className="flex flex-col items-center space-y-5">
        <Image source={require("../../assets/images/logo.png")} />
        <Text className="text-[32px] tracking-widest text-font">ZK WALLET</Text>
        <Text>The First Smart Contract Wallet on Mina Protocol</Text>
      </View>
      <View className="items-center mb-10">
        <CustomButton label="CREATE WALLET" target="TopupWallet"></CustomButton>
        <TouchableNativeFeedback>
          <View className="mt-52bg-gray-50 py-3 w-full border w-[280px] rounded-full border-primary">
            <Text className="text-center font-bold text-gray-400 tracking-widest">
              RECOVER WALLET
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

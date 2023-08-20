import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMinaWallet } from "../../services/wallet.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CreateWallet() {
  const navigation = useNavigation<any>();

  const createNewWallet = async () => {
    const createWallet = await createMinaWallet();
    await AsyncStorage.setItem("account", JSON.stringify(createWallet));
    navigation.navigate("Feature");
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-white pb-12">
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
        <View className="relative">
          <Image
            className="absolute bottom-[12px] left-[-0%]"
            source={require("../../assets/images/triangle.png")}
            alt=""
          />
          <TouchableNativeFeedback onPress={createNewWallet}>
            <View
              className="mb-10 w-[280px] bg-primary py-3"
              style={{ elevation: 10 }}
            >
              <Text className="text-center text-white text-[16px] font-bold tracking-widest">
                CREATE WALLET
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
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

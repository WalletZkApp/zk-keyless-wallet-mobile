import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeContext } from "../../../context/theme_context";
import { Snackbar } from "react-native-paper";

export default function Amount() {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState(0);
  const { primaryBackground, primaryFont } = useContext(themeContext);
  const route = useRoute<RouteProp<{}>>();
  const { from, to } = route.params;
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    if (value > 0 && from !== "" && to !== "") {
      navigation.navigate("Confirm", {
        from,
        to,
        amount: value,
      });
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: primaryBackground }}
        className="flex-1 p-5"
      >
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-primary font-medium">Back</Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{ color: primaryFont }}
              className="text-center text-[16px]"
            >
              Amount
            </Text>
            <Text style={{ color: primaryFont }} className="text-center">
              Mina Mainnet
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Feature")}>
            <Text className="text-primary font-medium">Cancel</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between mt-16">
          <Text style={{ color: "transparent" }} className="text-white">
            USE MAX
          </Text>
          <View className="items-center">
            <View className="bg-primary rounded-full px-6 py-1">
              <Text className="text-white text-center">MINA</Text>
            </View>
            <TextInput
              style={{ color: primaryFont }}
              keyboardType="number-pad"
              value={value.toString()}
              onChangeText={(e) => {
                if (Number(e) >= 0) {
                  setValue(Number(e));
                }
              }}
              className="p-10 text-[30px]"
              maxLength={9}
            />
            <View className="py-1 px-6 bg-gray-200 rounded-full">
              <Text>$0.00</Text>
            </View>
            <Text style={{ color: primaryFont }} className="mt-5">
              Balane : 0 MINA
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <Text
                style={{ color: primaryFont }}
                className="text-primary font-medium"
              >
                USE MAX
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableNativeFeedback onPress={submitHandler}>
          <View
            style={{ elevation: 10 }}
            className="w-full py-3 bg-primary rounded-md mt-auto"
          >
            <Text className="text-white font-semibold text-[16px] text-center">
              NEXT
            </Text>
          </View>
        </TouchableNativeFeedback>
      </SafeAreaView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={500}
        className="bg-red-500"
      >
        Insufficient Amount
      </Snackbar>
    </>
  );
}

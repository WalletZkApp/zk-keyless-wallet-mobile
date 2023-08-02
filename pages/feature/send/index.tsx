import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { themeContext } from "../../../context/theme_context";
import { Snackbar } from "react-native-paper";

export default function Send() {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<{}>>();
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Appliances" },
    { key: "2", value: "Cameras" },
    { key: "3", value: "Vegetables" },
    { key: "4", value: "Diary Products" },
    { key: "5", value: "Drinks" },
  ];

  const [visible, setVisible] = useState(false);
  const { smartcontract } = route.params;
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);

  const submitHandler = () => {
    if (selected !== "" && smartcontract !== "") {
      navigation.navigate("Amount", {
        from: selected,
        to: smartcontract,
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
            <Ionicons name="chevron-back" size={30} color={primaryFont} />
          </TouchableOpacity>
          <Text
            style={{ color: primaryFont }}
            className="font-semibold text-[16px]"
          >
            SEND MINA
          </Text>
          <Ionicons name="chevron-back" size={30} color="transparent" />
        </View>
        <Text style={{ color: primaryFont }} className="my-5">
          From
        </Text>
        <SelectList
          setSelected={(val: string) => setSelected(val)}
          data={data}
          boxStyles={{
            borderRadius: 6,
            paddingHorizontal: 12,
            borderColor: primaryBorder,
          }}
          inputStyles={{
            color: primaryFont,
            backfaceVisibility: "visible",
            marginHorizontal: 5,
            paddingHorizontal: 2,
            borderRadius: 2,
          }}
          dropdownStyles={{
            borderColor: primaryBorder,
          }}
          closeicon={<Ionicons name="close" color={primaryFont} size={20} />}
          searchicon={<Ionicons name="search" color={primaryFont} size={16} />}
          dropdownTextStyles={{ color: primaryFont }}
          save="value"
          search={false}
          disabledTextStyles={{ color: primaryFont }}
          arrowicon={
            <Ionicons name="chevron-down" color={primaryFont} size={16} />
          }
        />

        <Text style={{ color: primaryFont }} className="mt-5">
          To
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("QRScanner")}>
          <View
            style={{ borderColor: primaryBorder }}
            className="mt-5 p-3 rounded-md border flex-row justify-between space-x-2 items-center"
          >
            <Text style={{ color: primaryFont, flexShrink: 1 }}>
              {smartcontract ? smartcontract : "Search Address"}
            </Text>
            <MaterialCommunityIcons
              color={primaryFont}
              name="line-scan"
              size={24}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ color: primaryFont }} className="mt-5">
          Recent
        </Text>
        <View className="mt-auto">
          <TouchableNativeFeedback onPress={submitHandler}>
            <View
              style={{ elevation: 10 }}
              className="w-full py-3 bg-primary rounded-md"
            >
              <Text className="text-white text-center font-semibold text-[16px]">
                NEXT
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </SafeAreaView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={500}
        className="bg-red-500"
      >
        Pick Sender and Receiver
      </Snackbar>
    </>
  );
}

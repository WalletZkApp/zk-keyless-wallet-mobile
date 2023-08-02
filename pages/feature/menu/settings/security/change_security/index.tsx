import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { themeContext } from "../../../../../../context/theme_context";

export default function ChangeSecurity() {
  const navigation = useNavigation<any>();
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="py-5 flex-1"
    >
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons color={primaryFont} name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text
          style={{ color: primaryFont }}
          className="text-[20px] font-semibold"
        >
          Change Security
        </Text>
        <Ionicons color="transparent" name="chevron-back" size={30} />
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate("InputPin")}>
        <View
          style={{ borderBottomColor: primaryBorder }}
          className="flex-row items-center justify-between p-5 border-b"
        >
          <Text style={{ color: primaryFont }}>Change PIN</Text>
          <Ionicons color={primaryFont} name="chevron-forward" size={24} />
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

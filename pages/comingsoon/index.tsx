import { useContext } from "react";
import { View, Text } from "react-native";
import { themeContext } from "../../context/theme_context";

export default function ComingSoon() {
  const { primaryBackground, primaryFont } = useContext(themeContext);
  return (
    <View
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 items-center justify-center"
    >
      <Text style={{ color: primaryFont }}>Coming Soon</Text>
    </View>
  );
}

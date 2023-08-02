import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeContext } from "../../../../../../context/theme_context";

const CELL_COUNT = 6;

export default function GoogleAuthentication() {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  const navigation = useNavigation<any>();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5 pb-12"
    >
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons color={primaryFont} name="chevron-back" size={24} />
        </TouchableOpacity>
        <Text
          style={{ color: primaryFont }}
          className="text-center text-[20px] font-medium"
        >
          Code Verification
        </Text>
        <Ionicons name="chevron-back" size={24} color="transparent" />
      </View>
      <Text
        style={{ color: primaryFont }}
        className="text-center mt-20 text-[18px] font-medium"
      >
        Enter code verification
      </Text>
      <View className="mt-4">
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={{ ...styles.codeFieldRoot }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                { color: primaryFont, borderColor: primaryBorder },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View className="flex-row justify-center mt-8 items-center space-x-1">
        <Text style={{ color: primaryFont }}>Didn't get a code ?</Text>
        <Pressable>
          <Text
            style={{ color: primaryFont }}
            className="text-primary font-semibold"
          >
            Click to resend
          </Text>
        </Pressable>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Security")}>
        <View
          style={{ elevation: 10 }}
          className="w-full p-3 bg-primary mt-auto rounded-md"
        >
          <Text className="text-white text-center font-bold">Submit</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    borderRadius: 5,
  },
  focusCell: {
    borderColor: "#804CDB",
  },
});

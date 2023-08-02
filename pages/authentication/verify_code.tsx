import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { SafeAreaView } from "react-native-safe-area-context";

const CELL_COUNT = 6;

export default function VerifyCode() {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView className="flex-1 p-5 pb-12 bg-white">
      <Text className="text-center text-[20px] font-medium">
        Verify code on your email
      </Text>
      <Text className="text-center mt-20 text-[18px] font-medium">
        Enter code verification
      </Text>
      <View className="mt-4">
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View className="flex-row justify-center mt-8 items-center space-x-1">
        <Text>Didn't get a code ?</Text>
        <Pressable>
          <Text className="text-primary font-semibold">Click to resend</Text>
        </Pressable>
      </View>
      <Text className="mt-20 text-[16px]">
        An 6- digits code has been sent to test@email.com
      </Text>
      <Text className="mt-12 text-[16px]">The OTP will be expired in 9:30</Text>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("SetupPassword")}
      >
        <View
          style={{ elevation: 10 }}
          className="w-full p-3 bg-primary mt-auto rounded-md"
        >
          <Text className="text-white text-center font-bold">Verify</Text>
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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Alert } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { themeContext } from "../../../../../../context/theme_context";

export default function InputNewPin() {
  const { primaryBackground, secondaryBackground, primaryFont } =
    useContext(themeContext);
  const [pin, setPin] = useState<number[]>([]);
  const navigation = useNavigation<any>();

  const pinHandler = async (value: number) => {
    if (pin.length < 6) {
      setPin((prevState) => {
        prevState.push(value);
        return [...prevState];
      });
    }
    if (pin.length === 6) {
      navigation.navigate("ConfirmNewPin", {
        newPin: pin.join(""),
      });
    }
  };

  const deleteHandler = () => {
    setPin((prevState) => {
      prevState.pop();
      return [...prevState];
    });
  };

  return (
    <View
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5 py-12 justify-between"
    >
      <Text
        style={{ color: primaryFont }}
        className="text-[20px] font-semibold text-center mt-5"
      >
        Input New PIN
      </Text>
      <View className="items-center">
        <View className="flex-row items-center space-x-3">
          {Array(6)
            .fill(null)
            .map((x, index) => {
              return (
                <View
                  key={"circle_2" + index}
                  style={{ backgroundColor: secondaryBackground }}
                  className="h-[30px] w-[30px] rounded-full items-center justify-center p-2"
                >
                  {pin[index] || pin[index] === 0 ? (
                    <View
                      style={{ backgroundColor: primaryFont }}
                      className="h-full w-full rounded-full"
                    />
                  ) : (
                    <View className="h-full w-full rounded-full"></View>
                  )}
                </View>
              );
            })}
        </View>
        <View className="mt-24 px-8">
          <View className="flex-row space-x-12 items-center justify-between">
            {[1, 2, 3].map((x) => {
              return (
                <Pressable onPress={() => pinHandler(x)}>
                  <View
                    key={"pin_2" + x}
                    style={{ backgroundColor: secondaryBackground }}
                    className="rounded-full w-[70px] h-[70px] justify-center items-center"
                  >
                    <Text
                      style={{ color: primaryFont }}
                      className="text-[24px]"
                    >
                      {x}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View className="flex-row space-x-12 items-center justify-between mt-5">
            {[4, 5, 6].map((x) => {
              return (
                <Pressable onPress={() => pinHandler(x)}>
                  <View
                    key={"pin_2" + x}
                    style={{ backgroundColor: secondaryBackground }}
                    className="rounded-full w-[70px] h-[70px] justify-center items-center"
                  >
                    <Text
                      style={{ color: primaryFont }}
                      className="text-[24px]"
                    >
                      {x}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View className="flex-row space-x-12 items-center justify-between mt-5">
            {[7, 8, 9].map((x) => {
              return (
                <Pressable onPress={() => pinHandler(x)}>
                  <View
                    key={"pin_2" + x}
                    style={{ backgroundColor: secondaryBackground }}
                    className="rounded-full w-[70px] h-[70px] justify-center items-center"
                  >
                    <Text
                      style={{ color: primaryFont }}
                      className="text-[24px]"
                    >
                      {x}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <View className="flex-row space-x-12 items-center justify-between mt-5">
            <View
              style={{ backgroundColor: "transparent" }}
              className="rounded-full w-[70px] h-[70px] justify-center items-center"
            />
            <Pressable onPress={() => pinHandler(0)}>
              <View
                style={{ backgroundColor: secondaryBackground }}
                className="rounded-full w-[70px] h-[70px] justify-center items-center"
              >
                <Text style={{ color: primaryFont }} className="text-[24px]">
                  0
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => deleteHandler()}>
              <View
                style={{ backgroundColor: secondaryBackground }}
                className="rounded-full w-[70px] h-[70px] justify-center items-center"
              >
                <Feather color={primaryFont} name="delete" size={24} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

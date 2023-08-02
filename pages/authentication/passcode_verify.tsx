import {
  View,
  Text,
  Switch,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PasscodeVerify() {
  const navigation = useNavigation<any>();
  const [faceId, setFaceId] = useState(false);
  const [passcode, setPasscode] = useState<number[]>([]);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);

  const getFaceId = async () => {
    const value = await AsyncStorage.getItem("face_id");
    if (value != null && value === "true") {
      setFaceId(true);
    }
  };

  const checkCompatibility = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
    const enroll = await LocalAuthentication.isEnrolledAsync();
    const availableBiometrics =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    const fingerprintFeatureAvailability = availableBiometrics.includes(
      LocalAuthentication.AuthenticationType.FINGERPRINT
    );
    if (enroll && fingerprintFeatureAvailability) {
      setFingerprint(true);
    }
  };

  useEffect(() => {
    getFaceId();
    checkCompatibility();
  }, []);

  const pressHandler = async (value: number) => {
    if (passcode.length < 6) {
      setPasscode((prevState) => {
        prevState.push(value);
        return [...prevState];
      });
      if (passcode.length === 6) {
        // Do something
        var pass = passcode.join("");
        const currentPasscode = await AsyncStorage.getItem("passcode");
        if (currentPasscode === pass) {
          if (faceId) {
            navigation.navigate("FaceidLogin");
          } else {
            navigation.navigate("Feature");
          }
        }
      }
    }
  };

  const handleFingerprint = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        fallbackLabel: "Use Passcode",
        cancelLabel: "Cancel",
      });
      if (biometricAuth.success) {
        navigation.replace("Feature");
      } else {
        Alert.alert("Alert", biometricAuth.warning);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView
        className="flex-1 p-5 pb-12 bg-white"
        style={{ elevation: -1 }}
      >
        <View className="items-center mt-auto">
          <Text className="text-[20px]">Enter Passcode</Text>
          <View className="flex-row items-center space-x-4 mt-10">
            {Array(6)
              .fill(null)
              .map((x, index) => {
                return (
                  <View key={index} className="bg-gray-300 rounded-full p-2">
                    <View
                      className={`${
                        passcode[index] != null ? "bg-black" : "bg-transparent"
                      } p-2 rounded-full`}
                    ></View>
                  </View>
                );
              })}
          </View>
        </View>
        <View className="flex-row justify-between items-center mt-16">
          <View className="flex-row items-center space-x-2">
            <MaterialCommunityIcons name="face-recognition" size={24} />
            <Text className="text-[16px]">Use Face ID to log in</Text>
          </View>
          <Switch
            trackColor={{ false: "#DBDFEA", true: "#C4B0FF" }}
            thumbColor={faceId ? "#804CDB" : "#f4f3f4"}
            value={faceId}
            onValueChange={async (value) => {
              setFaceId(value);
              if (value === true) {
                await AsyncStorage.setItem("face_id", "true");
              } else {
                await AsyncStorage.setItem("face_id", "false");
              }
            }}
          />
        </View>
        <View className="w-[90%] mx-auto mt-5">
          <View className="flex-row justify-between">
            {[1, 2, 3].map((x) => {
              return (
                <View
                  key={"passcode" + x}
                  className="flex-1 justify-center items-center"
                >
                  <Pressable
                    onPress={() => pressHandler(x)}
                    key={x}
                    className="p-5"
                  >
                    <Text className="text-[30px]">{x}</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
          <View className="flex-row justify-between">
            {[4, 5, 6].map((x) => {
              return (
                <View
                  key={"passcode" + x}
                  className="flex-1 justify-center items-center"
                >
                  <Pressable
                    onPress={() => pressHandler(x)}
                    key={x}
                    className="p-5"
                  >
                    <Text className="text-[30px]">{x}</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
          <View className="flex-row justify-between">
            {[7, 8, 9].map((x) => {
              return (
                <View
                  key={"passcode" + x}
                  className="flex-1 justify-center items-center"
                >
                  <Pressable
                    onPress={() => pressHandler(x)}
                    key={x}
                    className="p-5"
                  >
                    <Text className="text-[30px]">{x}</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
          <View className="flex-row items-center">
            <View className="flex-1 justify-center items-center">
              <TouchableOpacity
                onPress={
                  isBiometricSupported && fingerprint
                    ? handleFingerprint
                    : () =>
                        Alert.alert(
                          "Alert",
                          "Fingerprint is not enabled on this device !"
                        )
                }
              >
                <MaterialCommunityIcons size={40} name="fingerprint" />
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-center items-center">
              <Pressable onPress={() => pressHandler(0)} className="p-5">
                <Text className="text-[30px]">0</Text>
              </Pressable>
            </View>
            <View className="flex-1 justify-center items-center">
              <TouchableOpacity
                onPress={() =>
                  setPasscode((prevState) => {
                    prevState.pop();
                    return [...prevState];
                  })
                }
              >
                <Feather name="delete" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Button, Image } from "react-native";
import { View, Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FaceidLogin() {
  const navigation = useNavigation<any>();
  const [isFaceIdAvailable, setIsFaceIdAvailable] = useState(true);

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const availableBiometrics = (
      await LocalAuthentication.supportedAuthenticationTypesAsync()
    ).includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
    setIsFaceIdAvailable(availableBiometrics);
  };

  const handleFaceIdAuth = async () => {
    try {
      const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: "Scan your face to authenticate",
        fallbackLabel: "Use passcode",
        disableDeviceFallback: false,
      });

      if (success) {
        navigation.navigate("Feature");
        // Perform actions after successful authentication
      } else {
        Alert.alert("Error", "Face ID authentication failed");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while authenticating with Face ID"
      );
    }
  };

  return (
    <View className="flex-1 bg-white items-center justify-center">
      {isFaceIdAvailable ? (
        <View className="items-center">
          <TouchableOpacity onPress={handleFaceIdAuth}>
            <Image source={require("../../assets/images/face_id.png")} />
          </TouchableOpacity>
          <Text className="mt-2">Click to scan your face</Text>
        </View>
      ) : (
        <View className="items-center">
          <Text className="text-[16px]">
            Face ID is not enabled on this device !
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-blue-600 text-[16px] mt-2">
              Disabled Face ID Method
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

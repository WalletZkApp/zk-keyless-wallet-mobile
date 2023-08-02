import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { useContext, useRef, useState } from "react";
import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import { themeContext } from "../../../context/theme_context";
import { Snackbar } from "react-native-paper";

export default function Receive() {
  const { primaryBackground, secondaryBackground, primaryFont } =
    useContext(themeContext);
  const navigation = useNavigation<any>();
  const contract = "B62qrr9V6xxwmHJ3Ktn7kbdHhAQK52vdc7ouTfq2H9FV1VRWJHpEPcS";
  const [smartContract, setSmartContract] = useState(contract);
  const [visible, setVisible] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(smartContract);
    setVisible(true);
  };

  const viewShotRef = useRef<ViewShot>(null);

  const shareHandler = async () => {
    const response = await Sharing.isAvailableAsync();
    if (response) {
      // Capture the QR code as an image using ViewShot
      if (viewShotRef.current?.capture) {
        try {
          const uri = await viewShotRef.current.capture();
          // Share the saved image using Expo Sharing
          await Sharing.shareAsync(uri, {
            mimeType: "image/png",
            dialogTitle: "Share QR Code",
          });
        } catch (error: any) {
          alert(error.message);
        }
      }
    }
  };

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: primaryBackground }}
        className="flex-1 p-5"
      >
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={primaryFont} />
          </TouchableOpacity>
          <Text
            style={{ color: primaryFont }}
            className="text-[16px] font-semibold"
          >
            Receive
          </Text>
          <Ionicons name="chevron-back" size={24} color="transparent" />
        </View>
        <View className="mt-32 flex flex-col items-center space-y-8">
          <Text style={{ color: primaryFont }} className="mb-5">
            Scan the QR code and transfer MINA to it
          </Text>
          <ViewShot ref={viewShotRef} options={{ format: "png", quality: 1 }}>
            <QRCode
              size={200}
              value={smartContract}
              logo={require("../../../assets/images/logo_bg_white.png")}
            />
          </ViewShot>
          <Text
            style={{ color: primaryFont }}
            className="max-w-[70%] mx-auto text-center"
          >
            B62qrr9V6xxwmHJ3Ktn7kbdHhAQK52vdc7ouTfq2H9FV1VRWJHpEPcS
          </Text>
          <View className="flex-row items-center mt-5 w-[70%] justify-between">
            <TouchableOpacity onPress={shareHandler}>
              <View
                style={{ backgroundColor: secondaryBackground }}
                className="flex-row items-center space-x-2 p-2 px-4 rounded-full"
              >
                <Text style={{ color: primaryFont }}>Share</Text>
                <Ionicons
                  color={primaryFont}
                  name="share-social-outline"
                  size={20}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={copyToClipboard}>
              <View
                style={{ backgroundColor: secondaryBackground }}
                className="flex-row items-center space-x-2 p-2 px-4 rounded-full"
              >
                <Text style={{ color: primaryFont }}>Copy</Text>
                <Ionicons color={primaryFont} name="copy-outline" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={500}
        className="bg-primary"
      >
        Copied to Clipboard
      </Snackbar>
    </>
  );
}

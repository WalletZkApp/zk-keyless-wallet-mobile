import { Text } from "react-native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation<any>();

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("Send", {
      smartcontract: data,
    });
  };

  if (hasPermission === null) {
    return (
      <Text className="text-center mt-12">
        Requesting for camera permission...
      </Text>
    );
  }
  if (hasPermission === false) {
    return <Text className="text-center mt-12">No access to camera</Text>;
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        className="flex-1"
      />
    </SafeAreaView>
  );
}

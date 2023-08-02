import { useContext, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { themeContext } from "../../../../context/theme_context";

interface detail {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  name: string;
}

export default function AccountDetails({
  show,
  setShow,
  address,
  name,
}: detail) {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      containerStyle={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      index={show ? 0 : -1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setShow(false)}
      backgroundStyle={{ backgroundColor: primaryBackground }}
      handleIndicatorStyle={{ backgroundColor: primaryFont }}
    >
      <View
        style={{ backgroundColor: primaryBackground }}
        className="flex-1 p-5"
      >
        <Text
          style={{ color: primaryFont }}
          className="font-bold text-center text-[20px]"
        >
          Account Details
        </Text>
        <View
          style={{ borderBottomColor: primaryBorder }}
          className="border-b mt-8 pb-4"
        >
          <Text
            style={{ color: primaryFont }}
            className="font-semibold text-[16px]"
          >
            Account Address
          </Text>
          <Text style={{ color: primaryFont }} className="text-gray-500 mt-2">
            B62qrr9V6xxwmHJ3Ktn7kbdHhAQK52vdc7ouTfq2H9FV1VRWJHpEPcS
          </Text>
        </View>
        <View
          style={{ borderBottomColor: primaryBorder }}
          className="border-b mt-5 pb-4"
        >
          <Text
            style={{ color: primaryFont }}
            className="font-semibold text-[16px]"
          >
            Account Name
          </Text>
          <Text style={{ color: primaryFont }} className="text-gray-500 mt-2">
            {name}
          </Text>
        </View>
      </View>
    </BottomSheet>
  );
}

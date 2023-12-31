import { useContext, useMemo, useRef } from "react";
import { View, Text, TextInput, TouchableNativeFeedback } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { themeContext } from "../../../../context/theme_context";

interface detail {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateAccount({ show, setShow }: detail) {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ["80%"], []);

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
          Create Account
        </Text>
        <Text style={{ color: primaryFont }} className="mt-8">
          Please enter your account name
        </Text>
        <TextInput
          style={{ color: primaryFont, borderColor: primaryBorder }}
          className="p-3 px-4 border rounded-md mt-5"
          placeholder="Input Account Name"
          placeholderTextColor={"gray"}
        />
        <TouchableNativeFeedback>
          <View
            className="w-full bg-primary rounded-md py-3 mt-auto"
            style={{ elevation: 10 }}
          >
            <Text
              style={{ color: primaryFont }}
              className="text-center text-[16px] font-semibold text-white"
            >
              Confirm
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </BottomSheet>
  );
}

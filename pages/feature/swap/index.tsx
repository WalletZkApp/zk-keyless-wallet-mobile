import { useContext, useMemo, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { themeContext } from "../../../context/theme_context";

interface detail {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwapBottomSheet({ show, setShow }: detail) {
  const navigation = useNavigation<any>();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ["25%"], []);

  const { primaryBackground, primaryFont } = useContext(themeContext);

  return (
    <>
      <BottomSheet
        containerStyle={{ backgroundColor: "rgba(0,0,0,0.4)", elevation: 10 }}
        ref={bottomSheetRef}
        index={show ? 0 : -1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setShow(false)}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}
        backgroundStyle={{ backgroundColor: primaryBackground }}
        handleIndicatorStyle={{ backgroundColor: primaryFont }}
      >
        <View
          style={{ backgroundColor: primaryBackground }}
          className="flex-1 p-5"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Send", { smartcontract: "" })}
          >
            <View className="flex-row items-center space-x-4">
              <View className="p-3 rounded-full bg-primary">
                <FontAwesome name="send" size={16} color="white" />
              </View>
              <View>
                <Text
                  style={{ color: primaryFont }}
                  className="text-[16px] font-semibold"
                >
                  Send
                </Text>
                <Text
                  style={{ color: primaryFont }}
                  className="mt-1 font-light"
                >
                  Send crypto to any account
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Receive")}>
            <View className="flex-row items-center space-x-4 mt-8">
              <TouchableOpacity>
                <View className="p-3 rounded-full bg-primary">
                  <FontAwesome name="send" size={16} color="white" />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{ color: primaryFont }}
                  className="text-[16px] font-semibold"
                >
                  Receive
                </Text>
                <Text
                  style={{ color: primaryFont }}
                  className="mt-1 font-light"
                >
                  Receive crypto from any account
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
}

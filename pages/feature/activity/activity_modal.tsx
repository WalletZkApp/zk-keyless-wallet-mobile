import { View, Text, Modal, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { themeContext } from "../../../context/theme_context";

interface modal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  status: string;
  date: Date;
  from: string;
  to: string;
  amount: number;
}

export default function ActivityModal({
  visible,
  setVisible,
  type,
  status,
  date,
  from,
  to,
  amount,
}: modal) {
  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View className="flex-1 justify-center items-center bg-black/[0.3]">
        <View
          style={{ backgroundColor: primaryBackground }}
          className="rounded-md w-[80%]"
        >
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: primaryBorder }}
            className="flex-row items-center justify-between py-4 border-b px-5"
          >
            <Ionicons name="close" size={24} color="transparent" />
            <Text
              style={{ color: primaryFont }}
              className="font-semibold text-[16px]"
            >
              {type} MINA
            </Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Ionicons name="close" size={24} color={primaryFont} />
            </TouchableOpacity>
          </View>
          <View className="p-5">
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: primaryBorder }}
              className="pb-5 border-b"
            >
              <View className="flex-row items-center justify-between">
                <Text style={{ color: primaryFont }}>Status</Text>
                <Text style={{ color: primaryFont }}>Date</Text>
              </View>
              <View className="flex-row items-center justify-between mt-4">
                <Text className="text-green-500 font-semibold">{status}</Text>
                <Text style={{ color: primaryFont }} className="font-medium">
                  {months[date.getMonth()]} {date.getDay()} at {date.getHours()}
                  :{date.getMinutes()} {date.getHours() >= 12 ? "pm" : "am"}
                </Text>
              </View>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: primaryBorder }}
              className="py-5 border-b"
            >
              <View className="flex-row items-center justify-between">
                <Text style={{ color: primaryFont }}>From</Text>
                <Text style={{ color: primaryFont }}>To</Text>
              </View>
              <View className="flex-row items-center justify-between mt-4">
                <Text style={{ color: primaryFont }}>{from}</Text>
                <Text style={{ color: primaryFont }}>{to}</Text>
              </View>
            </View>
            <View className="mt-5">
              <Text style={{ color: primaryFont }}>NONCE</Text>
              <Text style={{ color: primaryFont }} className="mt-2 font-medium">
                #1
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: primaryBorder,
                }}
                className="p-5 border rounded-lg mt-5"
              >
                <View className="flex-row items-center justify-between">
                  <Text style={{ color: primaryFont }}>Amount</Text>
                  <Text style={{ color: primaryFont }}>250 MINA</Text>
                </View>
                <View className="h-[1px] w-full bg-gray-200 my-5"></View>
                <View className="flex-row items-center justify-between">
                  <Text
                    style={{ color: primaryFont }}
                    className="font-semibold"
                  >
                    Total Amount
                  </Text>
                  <Text
                    style={{ color: primaryFont }}
                    className="font-semibold"
                  >
                    {amount} MINA
                  </Text>
                </View>
                <View className="flex-row justify-end mt-3">
                  <Text style={{ color: primaryFont }}>$141.75</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-primary mt-3 text-center font-medium text-[16px]">
                  View on Minascan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

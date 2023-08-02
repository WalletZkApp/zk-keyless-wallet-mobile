import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { useContext, useState } from "react";
import ActivityModal from "./activity_modal";
import { themeContext } from "../../../context/theme_context";

export default function Activity() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    status: "Confirmed",
    date: new Date(),
    from: "B62qrr9v6...EPcS",
    to: "B62qrr9v6...EPcS",
    type: "Sent",
    amount: 250,
  });

  const { primaryBackground, primaryFont, primaryBorder } =
    useContext(themeContext);

  return (
    <SafeAreaView
      style={{ backgroundColor: primaryBackground }}
      className="flex-1 p-5"
    >
      <ActivityModal {...data} visible={modal} setVisible={setModal} />
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <View className="w-[50px]">
            <Text
              style={{ color: primaryFont }}
              className="hidden text-white font-semibold"
            >
              Close
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{ color: primaryFont }}
            className="text-center text-[16px] font-semibold"
          >
            Transactions
          </Text>
          <Text style={{ color: primaryFont }} className="text-center">
            Account 1
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/images/avatar.png")}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => setModal(true)}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: primaryBorder,
                }}
                className="py-5 border-b"
              >
                <Text style={{ color: primaryFont }}>{item.date}</Text>
                <View className="flex-row justify-between mt-5">
                  <View className="flex-row space-x-3 items-center">
                    <View className="p-1 rounded-full bg-primary">
                      <Feather name="arrow-up-right" color="white" size={26} />
                    </View>
                    <View>
                      <Text style={{ color: primaryFont }}>
                        {item.type === "sent" ? "Sent MINA" : "Received MINA"}
                      </Text>
                      <Text className="text-green-500 font-medium">
                        {item.confirmed ? "Confirmed" : "Pending"}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ color: primaryFont }}>
                      {item.balance} MINA
                    </Text>
                    <Text
                      style={{ color: primaryFont }}
                      className="text-right font-light"
                    >
                      ${item.value}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const transactions = [
  {
    id: 1,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
  {
    id: 2,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
  {
    id: 3,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
  {
    id: 4,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
  {
    id: 5,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
  {
    id: 6,
    date: "Jun 11 at 2:29 PM",
    type: "sent",
    confirmed: true,
    balance: 250,
    value: 141.75,
  },
];

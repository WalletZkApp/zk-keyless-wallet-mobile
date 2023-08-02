import { View, Text, TouchableNativeFeedback, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import AccountDetails from "./account_details";
import { useContext, useState } from "react";
import CreateAccount from "./create_account";
import ImportAccount from "./import_account";
import { themeContext } from "../../../../context/theme_context";

export default function AccountManagement() {
  const navigation = useNavigation<any>();
  const [detailShow, setDetailShow] = useState(false);
  const [createShow, setCreateShow] = useState(false);
  const [importShow, setImportShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { primaryBackground, primaryFont } = useContext(themeContext);

  return (
    <>
      <View
        style={{ backgroundColor: primaryBackground }}
        className="flex-1 px-5 py-12"
      >
        <View className="flex-row items-center justify-between">
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={primaryFont} size={30} />
          </TouchableNativeFeedback>
          <Text
            style={{ color: primaryFont }}
            className="text-[20px] font-bold"
          >
            Account Management
          </Text>
          <Ionicons name="chevron-back" color="transparent" size={30} />
        </View>
        <View className="flex-row justify-end mt-5">
          <TouchableNativeFeedback>
            <View className="p-2 rounded-full px-4 bg-red-100">
              <Text className="text-red-700 font-bold">Reset</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <FlatList
          className="my-5"
          showsVerticalScrollIndicator={false}
          data={accounts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View className="bg-primary p-4 mb-5 rounded-md">
                <View className="flex-row justify-between items-center">
                  <Text className="text-white font-semibold text-[16px]">
                    {item.label}
                  </Text>
                  <View>
                    <Ionicons name="checkmark-circle" color="white" size={24} />
                  </View>
                </View>
                <Text className="text-white mt-1">{item.smartContract}</Text>
                <View className="mt-1 flex-row justify-between items-center">
                  <Text className="text-white">{item.balance} MINA</Text>
                  <TouchableNativeFeedback onPress={() => setDetailShow(true)}>
                    <Entypo
                      name="dots-three-horizontal"
                      color="white"
                      size={24}
                    />
                  </TouchableNativeFeedback>
                </View>
              </View>
            );
          }}
        />
        <View className="flex-row mt-auto">
          <TouchableNativeFeedback onPress={() => setImportShow(true)}>
            <View
              style={{ elevation: 5 }}
              className="flex-1 bg-white mr-5 flex-row justify-center items-center space-x-2 border border-primary p-2 rounded-md"
            >
              <Feather size={24} name="download" color="#804CDB" />
              <Text className="text-primary font-semibold">Import Account</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => setCreateShow(true)}>
            <View
              style={{ elevation: 5 }}
              className="flex-1 flex-row justify-center items-center space-x-2 border bg-primary p-2 rounded-md"
            >
              <Ionicons size={24} name="add-circle-outline" color="white" />
              <Text className="text-white font-semibold">Create Account</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      {detailShow && (
        <AccountDetails
          show={detailShow}
          setShow={setDetailShow}
          name={accounts[currentIndex].label}
          address={accounts[currentIndex].smartContract}
        />
      )}
      {createShow && (
        <CreateAccount show={createShow} setShow={setCreateShow} />
      )}
      {importShow && (
        <ImportAccount show={importShow} setShow={setImportShow} />
      )}
    </>
  );
}

const accounts = [
  {
    id: 1,
    label: "Account 1",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 2,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 3,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 4,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 5,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 6,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
  {
    id: 7,
    label: "Account 2",
    smartContract: "B62qrr9...2H9FV1VRWJHpEPcS",
    balance: 0.0,
  },
];

// React Native Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

// Pages
import Onboarding1 from "./pages/onboarding/onboarding_1";
import Onboarding2 from "./pages/onboarding/onboarding_2";
import Onboarding3 from "./pages/onboarding/onboarding_3";
import CreateWallet from "./pages/wallet/create_wallet";
import TopupWallet from "./pages/wallet/topup_wallet";
import SocialLogin from "./pages/authentication/social_login";
import EmailSignup from "./pages/authentication/email_signup";
import EmailLogin from "./pages/authentication/email_login";
import PasscodeLogin from "./pages/authentication/passcode_setup";
import Payment from "./pages/wallet/payment";
import TopupMina from "./pages/wallet/topup_mina";
import VerifyCode from "./pages/authentication/verify_code";
import SetupPassword from "./pages/authentication/setup_password";
import AccountManagement from "./pages/feature/menu/account_management";
import AppleLogin from "./pages/authentication/apple_login";
import GoogleLogin from "./pages/authentication/google_login";
import FaceidLogin from "./pages/authentication/faceid_login";
import ComingSoon from "./pages/comingsoon";
import Send from "./pages/feature/send";
import Receive from "./pages/feature/receive";
import Amount from "./pages/feature/send/amount";
import Confirm from "./pages/feature/send/confirm";
import Settings from "./pages/feature/menu/settings";
import Security from "./pages/feature/menu/settings/security";
import ChangeSecurity from "./pages/feature/menu/settings/security/change_security";
import InputPin from "./pages/feature/menu/settings/security/change_security/input_pin";
import InputNewPin from "./pages/feature/menu/settings/security/change_security/input_new_pin";
import ConfirmNewPin from "./pages/feature/menu/settings/security/change_security/confirm_new_pin";
import PushNotifications from "./pages/feature/menu/settings/push_notifications";
import GoogleAuthentication from "./pages/feature/menu/settings/security/google_authentication";
import GuardianOnboarding1 from "./pages/feature/menu/settings/security/guardian/guardian_onboarding1";
import Guardian from "./pages/feature/menu/settings/security/guardian";
import GuardianOnboarding2 from "./pages/feature/menu/settings/security/guardian/guardian_onboarding2";
import GuardianOnboarding3 from "./pages/feature/menu/settings/security/guardian/guardian_onboarding3";
import Feature from "./pages/feature";

// Provider
import ThemeProvider from "./context/theme_context";
import { PaperProvider } from "react-native-paper";
import Scanner from "./pages/scanner";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              initialRouteName="Feature"
            >
              {/* Onboarding  */}
              <Stack.Screen name="Onboarding1" component={Onboarding1} />
              <Stack.Screen name="Onboarding2" component={Onboarding2} />
              <Stack.Screen name="Onboarding3" component={Onboarding3} />

              {/* Create Wallet  */}
              <Stack.Screen name="CreateWallet" component={CreateWallet} />
              <Stack.Screen name="TopupWallet" component={TopupWallet} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="TopupMina" component={TopupMina} />

              {/* Authentication  */}
              <Stack.Screen name="SocialLogin" component={SocialLogin} />
              <Stack.Screen name="AppleLogin" component={AppleLogin} />
              <Stack.Screen name="GoogleLogin" component={GoogleLogin} />

              {/* Signup  */}
              <Stack.Screen name="EmailSignup" component={EmailSignup} />
              <Stack.Screen name="VerifyCode" component={VerifyCode} />
              <Stack.Screen name="SetupPassword" component={SetupPassword} />

              {/* Login  */}
              <Stack.Screen name="EmailLogin" component={EmailLogin} />
              <Stack.Screen name="PasscodeLogin" component={PasscodeLogin} />
              <Stack.Screen name="FaceidLogin" component={FaceidLogin} />
              {/* Authentication End  */}

              {/* Feature  */}
              <Stack.Screen name="Feature" component={Feature} />
              <Stack.Screen name="QRScanner" component={Scanner} />

              {/* Send Part  */}
              <Stack.Screen name="Send" component={Send} />
              <Stack.Screen name="Amount" component={Amount} />
              <Stack.Screen name="Confirm" component={Confirm} />

              {/* Send Part End  */}
              <Stack.Screen name="Receive" component={Receive} />
              <Stack.Screen
                name="AccountManagement"
                component={AccountManagement}
              />
              {/* Feature End  */}

              {/* Settings  */}
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="Security" component={Security} />
              <Stack.Screen name="ChangeSecurity" component={ChangeSecurity} />
              <Stack.Screen name="InputPin" component={InputPin} />
              <Stack.Screen name="InputNewPin" component={InputNewPin} />
              <Stack.Screen name="ConfirmNewPin" component={ConfirmNewPin} />
              <Stack.Screen
                name="GoogleAuthentication"
                component={GoogleAuthentication}
              />
              <Stack.Screen
                name="GuardianOnboarding1"
                component={GuardianOnboarding1}
              />
              <Stack.Screen
                name="GuardianOnboarding2"
                component={GuardianOnboarding2}
              />
              <Stack.Screen
                name="GuardianOnboarding3"
                component={GuardianOnboarding3}
              />
              <Stack.Screen name="Guardian" component={Guardian} />
              <Stack.Screen
                name="PushNotifications"
                component={PushNotifications}
              />
              {/* Settings End  */}

              {/* Coming Soon  */}
              <Stack.Screen name="ComingSoon" component={ComingSoon} />
              {/* Coming Soon End  */}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </>
  );
}

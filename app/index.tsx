import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

function Onboarding() {
  return <Redirect href="/(auth)/welcome" />;
}

export default Onboarding;

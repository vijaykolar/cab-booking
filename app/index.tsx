import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { ROUTES } from "@/constants/routes";

function Onboarding() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  if (isSignedIn) {
    return <Redirect href={ROUTES.TABS.HOME} />;
  }
  return <Redirect href="/(auth)/welcome" />;
}

export default Onboarding;

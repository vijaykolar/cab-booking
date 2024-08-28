import { Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

function Rides() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <ThemedText>1</ThemedText>
    // </ParallaxScrollView>
    <SafeAreaView className="h-screen flex-1">
      <ThemedView>
        <ThemedText className="text-4xl text-teal-500 font-JakartaBold">
          H1i
        </ThemedText>
        <Text className="text-4xl text-cyan-300 font-JakartaExtraBold">
          This is rides
        </Text>
      </ThemedView>
    </SafeAreaView>
  );
}

export default Rides;

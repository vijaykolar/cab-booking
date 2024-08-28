// import { Text } from "react-native";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { SafeAreaView } from "react-native-safe-area-context";
//
// function Home() {
//   return (
//     // <ParallaxScrollView
//     //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//     //   headerImage={
//     //     <Image
//     //       source={require("@/assets/images/partial-react-logo.png")}
//     //       style={styles.reactLogo}
//     //     />
//     //   }
//     // >
//     //   <ThemedText>1</ThemedText>
//     // </ParallaxScrollView>
//     <SafeAreaView className="h-screen flex-1">
//       <ThemedView>
//         <ThemedText className="text-4xl text-teal-500 font-JakartaBold">
//           H1i
//         </ThemedText>
//         <Text className="text-4xl text-cyan-300 font-JakartaExtraBold">
//           This is{" "}
//         </Text>
//       </ThemedView>
//
//
//     </SafeAreaView>
//   );
// }
//
// export default Home;

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text className="text-red-500">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: 1, name: "d" }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => (
          <Text className="text-red-500">{item.item.name}</Text>
        )}
      />
      {/*<SignedIn>*/}
      {/*  <Text className="text-red-500">*/}
      {/*    Hello {user?.emailAddresses[0].emailAddress}*/}
      {/*  </Text>*/}
      {/*</SignedIn>*/}
      {/*<SignedOut>*/}
      {/*  <Link href="/sign-in">*/}
      {/*    <Text>Sign In</Text>*/}
      {/*  </Link>*/}
      {/*  <Link href="/sign-up">*/}
      {/*    <Text>Sign Up</Text>*/}
      {/*  </Link>*/}
      {/*</SignedOut>*/}
    </SafeAreaView>
  );
}

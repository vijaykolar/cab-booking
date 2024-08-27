import { Image, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ThemedButton from "@/components/ThemedButton";
import { icons } from "@/constants";
import { useColorScheme } from "@/hooks/useColorScheme";

function OAuth() {
  const color = useColorScheme();

  const handGoogleSignUp = async () => {
    console.log(1);
  };
  return (
    <View>
      <View className="flex items-center justify-center flex-row mt-4 gap-x-3">
        <ThemedView className="flex-1 h-[1px] bg-general-100 dark:bg-gray-700" />
        <ThemedText className="dark:text-gray-600 text-lg">Or</ThemedText>
        <ThemedView className="flex-1 h-[1px] bg-general-100 dark:bg-gray-700" />
      </View>
      <ThemedButton
        bgVariant="outline"
        textVariant={`${color === "light" ? "primary" : "secondary"}`}
        className="shadow-none w-full mt-5"
        title="Login with Google"
        IconLeft={() => (
          <Image
            className="h-5 w-5 mx-2"
            source={icons.google}
            resizeMode="contain"
          />
        )}
        onPress={handGoogleSignUp}
      />
    </View>
  );
}

export default OAuth;

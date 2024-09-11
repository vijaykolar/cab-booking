import { Alert, Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { StatusBar } from "expo-status-bar";
import { icons, images } from "@/constants";
import { useCallback, useState } from "react";
import ThemedButton from "@/components/ThemedButton";
import { Link, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";

function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Something went wrong");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form.email, form.password]);
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      <View className="flex-1">
        <View className="relative">
          <Image
            source={images.signUpCar}
            resizeMode="contain"
            className="w-full h-64 z-0"
          />
          <ThemedText className="absolute bottom-5 left-5 text-2xl font-JakartaBold">
            Welcome👋
          </ThemedText>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            placeholder=""
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <ThemedButton
            className="mt-6"
            title="Sign In"
            onPress={onSignInPress}
          />
          {/*  OAuth*/}
          <OAuth />
          <Link className="w-full text-center mt-8" href="/sign-up">
            <ThemedText className="text-center">
              Don't have an account?{" "}
              <Text className="text-primary-500 font-bold">Sign Up</Text>
            </ThemedText>
          </Link>
        </View>
        {/*  Modal*/}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default SignIn;

import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { StatusBar } from "expo-status-bar";
import { icons, images } from "@/constants";
import { useState } from "react";
import ThemedButton from "@/components/ThemedButton";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import OAuth from "@/components/OAuth";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = () => {
    console.log(1);
    console.log(form);
  };
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      <View className="flex-1">
        <View className="relative">
          <Image
            source={images.signUpCar}
            resizeMode="contain"
            className="w-full h-64 z-0"
          />
          <Text className="absolute bottom-5 left-5 text-2xl font-JakartaBold">
            Welcome👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
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

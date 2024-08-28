import { Alert, Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { StatusBar } from "expo-status-bar";
import { icons, images } from "@/constants";
import { useState } from "react";
import ThemedButton from "@/components/ThemedButton";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import ReactNativeModal from "react-native-modal";
import { ROUTES } from "@/constants/routes";
import { ThemedView } from "@/components/ThemedView";
import { fetchAPI } from "@/lib/fetch";

function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({ ...verification, state: "pending" });
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO - Create DB users
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
        // router.replace("/");
      } else {
        setVerification({
          ...verification,
          error: "Verification failed",
          state: "failed",
        });
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({
        ...verification,
        error: err.errors[0].longMessage || "Verification failed",
        state: "failed",
      });
      // console.error(JSON.stringify(err, null, 2));
    }
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
            Create your account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            onPress={onSignUpPress}
          />
          {/*  OAuth*/}
          <OAuth />
          <Link className="w-full text-center mt-8" href="/sign-in">
            <ThemedText className="text-center">
              Already have an account?{" "}
              <Text className="text-primary-500 font-bold">Log In</Text>
            </ThemedText>
          </Link>
        </View>
        {/*  Modal*/}
        <ReactNativeModal
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
            // setVerification({ ...verification, state: "success" });
          }}
          isVisible={verification.state === "pending"}
        >
          <ThemedView className=" p-5 rounded-xl min-h-[300px]">
            <ThemedText className="text-2xl font-JakartaBold mb-2">
              Verification
            </ThemedText>
            <ThemedText className="font-Jakarta mb-2">
              We have sent a verification code to {form.email}
            </ThemedText>
            <InputField
              label="Code"
              icon={icons.lock}
              placeholder="12345"
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <View>
                <ThemedText className="text-red-500 mt-1 text-sm">
                  {verification.error}
                </ThemedText>
              </View>
            )}
            <ThemedButton
              className="mt-4 bg-success-500"
              title="Verify Email"
              onPress={onPressVerify}
            />
          </ThemedView>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <ThemedView className="p-5 rounded-xl min-h-[300px]">
            <Image
              source={images.check}
              resizeMode="contain"
              className="w-28 h-28 mx-auto mb-3"
            />
            <ThemedText className="text-3xl font-JakartaBold text-center">
              Verified
            </ThemedText>
            <ThemedText className="text-base text-gray-400 font-Jakarta text-center">
              You have successfully verified
            </ThemedText>
            <ThemedButton
              className="mt-5"
              title="Browse Home"
              onPress={() => {
                setShowSuccessModal(false);
                router.push(ROUTES.TABS.HOME);
              }}
            />
          </ThemedView>
        </ReactNativeModal>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default SignUp;

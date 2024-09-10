import { GoogleTextInput } from "@/components/GoogleTextInput";
import { RideLayout } from "@/components/RideLayout";
import ThemedButton from "@/components/ThemedButton";
import { icons } from "@/constants";
import { ROUTES } from "@/constants/routes";
import { useLocationStore } from "@/store";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function FindRide() {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Ride">
      <View className="my-3">
        <Text className="text-lg mb-3 font-JakartaSemiBold">From</Text>
        <GoogleTextInput
          handlePress={(location) => setUserLocation(location)}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          icon={icons.target}
        />
      </View>
      <View className="my-3">
        <Text className="text-lg mb-3 font-JakartaSemiBold">To</Text>
        <GoogleTextInput
          handlePress={(location) => setDestinationLocation(location)}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="transparent"
          icon={icons.map}
        />
      </View>
      <ThemedButton
        title="Find ride"
        className="mt-5"
        onPress={() => router.push(ROUTES.ROOT.CONFIRM_RIDE)}
      />
    </RideLayout>
  );
}

export default FindRide;

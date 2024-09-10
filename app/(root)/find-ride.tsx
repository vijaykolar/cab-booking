import { useLocationStore } from "@/store";
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
    <SafeAreaView>
      <Text>Find ride!!!`</Text>
      <Text className="text-2xl">You are here: {userAddress}</Text>
      <Text className="text-2xl">You are going to: {destinationAddress}</Text>
    </SafeAreaView>
  );
}

export default FindRide;

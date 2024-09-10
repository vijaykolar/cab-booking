import ThemedButton from "@/components/ThemedButton";
import React from "react";
import { View, Text, Button } from "react-native";

const ConfirmRide: React.FC = () => {
  const handleConfirm = () => {
    // Logic for confirming the ride
  };

  const handleCancel = () => {
    // Logic for canceling the ride
  };

  return (
    <View>
      <Text>Confirm Ride</Text>
      {/* Display ride details here */}
      <ThemedButton title="Confirm" onPress={handleConfirm} />
      <ThemedButton title="Cancel" onPress={handleCancel} />
    </View>
  );
};

export default ConfirmRide;

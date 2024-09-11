import { DriverCard } from "@/components/DriverCard";
import { RideLayout } from "@/components/RideLayout";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ROUTES } from "@/constants/routes";
import { useDriveStore } from "@/store";
import { router } from "expo-router";
import React from "react";
import { View, Text, Button, FlatList } from "react-native";

const ConfirmRide: React.FC = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriveStore();

  return (
    <RideLayout title="Choose a driver">
      <FlatList
        data={drivers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(+item.id)}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <ThemedButton
              title="Select Ride"
              onPress={() => router.push(ROUTES.ROOT.BOOK_RIDE)}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;

import { icons } from "@/constants";
import { router } from "expo-router";
import { ReactNode, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Map } from "./Map";

function RideLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="absolute flex flex-row z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="bg-white h-10 w-10 rounded-full items-center justify-center">
                <Image
                  resizeMode="contain"
                  source={icons.backArrow}
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="ml-5 font-JakartaSemiBold text-xl">
              {title || "Go back"}
            </Text>
          </View>
          <Map />
        </View>
        <BottomSheet
          keyboardBehavior="interactive"
          ref={bottomSheetRef}
          index={0}
          snapPoints={["40%", "80%"]}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export { RideLayout };

import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ROUTES } from "@/constants/routes";
import { ThemedText } from "@/components/ThemedText";
import Swiper from "react-native-swiper";
import { ThemedView } from "@/components/ThemedView";
import { useRef, useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { onboarding } from "@/constants";
import ThemedButton from "@/components/ThemedButton";

function Welcome() {
  const {
    AUTH: { SIGN_UP },
  } = ROUTES;

  const swiperRef = useRef<Swiper>(null);
  const color = useColorScheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between">
      <TouchableOpacity
        onPress={() => router.replace(SIGN_UP)}
        className="p-5 w-full justify-end items-end"
      >
        <ThemedText className="text-md font-JakartaBold">Skip</ThemedText>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View
            className={`w-[32px] h-[4px] ${color === "light" ? "bg-gray-200" : "bg-gray-700"} mx-1`}
          />
        }
        activeDot={<View className={`w-[32px] h-[4px] bg-[#0286ff] `} />}
        horizontal
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item, index) => (
          <View
            key={index}
            className="h-fulls flex items-center text-center justify-center p-5"
          >
            <Image
              source={item.image}
              resizeMode="contain"
              className="w-full h-60 mt-2"
            />
            <View className="flex flex-row items-center justify-center p-5 w-full mt-10 mx-10">
              <ThemedText className="text-3xl font-bold text-center">
                {item.title}
              </ThemedText>
            </View>
            <ThemedText className="text-md font-JakartaMedium text-center mx-10 text-[#858585]">
              {item.description}
            </ThemedText>
          </View>
        ))}
      </Swiper>
      <ThemedButton
        className="w-11/12 mt-10"
        onPress={() =>
          isLastSlide
            ? router.replace(ROUTES.AUTH.SIGN_UP)
            : swiperRef?.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
      />
    </SafeAreaView>
  );
}

export default Welcome;

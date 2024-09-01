import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

function GoogleTextInput({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
    >
      <Text>ss</Text>
    </View>
  );
}

export { GoogleTextInput };

import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

function Map() {
  const region = {};
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      showsMyLocationButton={true}
      showsUserLocation={true}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      // userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
}

export { Map };

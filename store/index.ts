import { DriverStore, LocationStore, MarkerData } from "@/types/type";
import { create } from "zustand";

const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  destinationLongitude: null,
  userLatitude: null,
  destinationLatitude: null,
  destinationAddress: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userAddress: address,
      userLongitude: longitude,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationAddress: address,
      destinationLongitude: longitude,
    }));
  },
}));

const useDriveStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) =>
    set(() => ({
      selectedDriver: driverId,
    })),
  setDrivers: (drivers: MarkerData[]) =>
    set(() => ({
      drivers,
    })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));

export { useLocationStore, useDriveStore };

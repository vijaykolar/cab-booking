import { Href } from "expo-router";

const ROUTES = {
  AUTH: {
    WELCOME: "/(auth)/welcome" as Href<string>,
    SIGN_IN: "/(auth)/sign-in" as Href<string>,
    SIGN_UP: "/(auth)/sign-up" as Href<string>,
  },
};

export { ROUTES };

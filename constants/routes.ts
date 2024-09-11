import { Href } from "expo-router";

const ROUTES = {
  AUTH: {
    WELCOME: "/(auth)/welcome" as Href<string>,
    SIGN_IN: "/(auth)/sign-in" as Href<string>,
    SIGN_UP: "/(auth)/sign-up" as Href<string>,
  },
  TABS: {
    HOME: "/(root)/(tabs)/home" as Href<string>,
  },
  ROOT: {
    FIND_RIDE: "/(root)/find-ride" as Href<string>,
    CONFIRM_RIDE: "/(root)/confirm-ride" as Href<string>,
    BOOK_RIDE: "/(root)/book-ride" as Href<string>,
  },
};

export { ROUTES };

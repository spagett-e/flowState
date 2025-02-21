import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Theme, Text } from "tamagui";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { config } from "../tamagui.config";
import { Slot, useRouter } from "expo-router";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// SecureStore persistence for Clerk authentication
const tokenCache = {
  getToken: async () => await SecureStore.getItemAsync("clerk-token"),
  saveToken: async (token) => await SecureStore.setItemAsync("clerk-token", token),
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    CascadiaCode: require("../assets/fonts/CascadiaCode.ttf"),
  });

  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider
      publishableKey="YOUR_CLERK_PUBLISHABLE_KEY"
      tokenCache={tokenCache}
    >
      <TamaguiProvider config={config}>
        <Theme name="dark">
          <StatusBar style="light" />
          <Slot />
        </Theme>
      </TamaguiProvider>
    </ClerkProvider>
  );
}
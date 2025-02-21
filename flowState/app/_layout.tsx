import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Theme, } from "tamagui";
import { config } from "../tamagui.config";
import { Slot } from "expo-router";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load your custom fonts (adjust paths/names as needed)
  const [fontsLoaded] = useFonts({
    "CascadiaCode": require("../assets/fonts/CascadiaCode.ttf"),
  });

  // Once fonts are loaded, hide the splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Optionally, you can return null until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <StatusBar style="auto" />
        <Slot />
      </Theme>
    </TamaguiProvider>
  );
}

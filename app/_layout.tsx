import React from "react";
import { Navigator, Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const RootLayout = (props: Props) => {
    const [fontIsLoaded] = useFonts({
        Outfit_400: Outfit_400Regular,
        Outfit_500: Outfit_500Medium,
        Outfit_600: Outfit_600SemiBold,
    });
    const { top } = useSafeAreaInsets();

    if (!fontIsLoaded) return <SplashScreen />;

    return (
        <>
            <StatusBar style="auto" translucent />
            <Navigator>
                <Slot />
            </Navigator>
        </>
    );
};

export default RootLayout;

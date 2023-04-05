import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import {
    Link,
    Navigator,
    Slot,
    SplashScreen,
    Stack,
    useNavigation,
    usePathname,
    useRouter,
} from "expo-router";
import { Image } from "expo-image";
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

const styles = StyleSheet.create({
    headerTitleContainer: {
        flexDirection: "row",
        paddingVertical: 24,
        paddingBottom: 0,
        justifyContent: "space-between",
    },
    headerTitleImage: { aspectRatio: 135 / 48, height: 48 },
    headerRightContainer: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 1000,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white",
    },
    headerRightImage: {
        width: "100%",
        height: "100%",
    },
    contentStyle: {
        backgroundColor: "#f1f5f9",
        padding: 16,
    },
});

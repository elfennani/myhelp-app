import { StyleSheet, View } from "react-native";
import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";

type Props = {};

const RootLayout = (props: Props) => {
    const [fontIsLoaded] = useFonts({
        Outfit_400: Outfit_400Regular,
        Outfit_500: Outfit_500Medium,
        Outfit_600: Outfit_600SemiBold,
    });

    if (!fontIsLoaded) return <SplashScreen />;

    return (
        <>
            <StatusBar style="auto" translucent />
            <Stack
                screenOptions={{
                    animation: "slide_from_right",
                    headerStyle: {
                        backgroundColor: "#f1f5f9",
                    },
                    statusBarTranslucent: true,
                    headerTitle: () => (
                        <View style={styles.headerTitleContainer}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.headerTitleImage}
                                contentFit="cover"
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.headerRightContainer}>
                            <Image
                                source={require("../assets/user.png")}
                                style={styles.headerRightImage}
                                contentFit="cover"
                            />
                        </View>
                    ),
                    headerShadowVisible: false,
                    contentStyle: styles.contentStyle,
                }}
            />
        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    headerTitleContainer: {
        flexDirection: "row",
        paddingVertical: 24,
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

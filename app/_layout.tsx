import React from "react";
import { Navigator, Slot, SplashScreen, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatIdProvider from "../providers/ChatIdProvider";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import ChatHistory from "../components/organisms/ChatHistory";
import StyledText from "../components/atoms/StyledText";
import MessageField from "../components/molecules/MessageField";
import useSidebarAnimate from "../hooks/useSidebarAnimate";
import theme from "../lib/theme";
import Header from "../components/molecules/Header";

type Props = {};

const client = new QueryClient();

const RootLayout = (props: Props) => {
    const [fontIsLoaded] = useFonts({
        Outfit_400: Outfit_400Regular,
        Outfit_500: Outfit_500Medium,
        Outfit_600: Outfit_600SemiBold,
    });
    const { top, bottom } = useSafeAreaInsets();
    const router = useRouter();

    const {
        contentStyle,
        gestureHandler,
        leftStyle,
        openHistory,
        openPersons,
        rightStyle,
    } = useSidebarAnimate();

    if (!fontIsLoaded) return <SplashScreen />;

    return (
        <QueryClientProvider client={client}>
            <ChatIdProvider>
                <StatusBar style="auto" translucent />
                <Navigator>
                    <View style={[styles.wrapper]}>
                        <PanGestureHandler
                            // failOffsetY={[-32, 32]}
                            activeOffsetX={[-32, 32]}
                            onGestureEvent={gestureHandler}
                        >
                            <Animated.View style={[styles.container]}>
                                <Animated.View
                                    style={[
                                        styles.sidebar,
                                        styles.leftSidebar,
                                        {
                                            top: top + 16,
                                            bottom: bottom + 32,
                                        },
                                        leftStyle,
                                    ]}
                                >
                                    <ChatHistory />
                                    <View style={{ padding: 16 }}>
                                        {/* TODO: Add Profile here */}
                                        <StyledText>Profile here</StyledText>
                                    </View>
                                </Animated.View>
                                <Animated.View
                                    style={[
                                        styles.home,
                                        {
                                            paddingTop: top + 32,
                                            paddingBottom: bottom + 32,
                                        },
                                        contentStyle,
                                    ]}
                                >
                                    <Header
                                        onOpenHistory={openHistory}
                                        onOpenPersons={openPersons}
                                    />
                                    <View style={{ flex: 1 }}>
                                        <Slot />
                                    </View>
                                    <MessageField />
                                </Animated.View>
                                <Animated.View
                                    style={[
                                        styles.sidebar,
                                        styles.rightSidebar,
                                        {
                                            top: top + 16,
                                            bottom: bottom + 32,
                                        },
                                        rightStyle,
                                    ]}
                                ></Animated.View>
                            </Animated.View>
                        </PanGestureHandler>
                    </View>
                </Navigator>
            </ChatIdProvider>
        </QueryClientProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "visible",
    },
    sidebar: {
        position: "absolute",
        bottom: 0,
        top: 0,
        zIndex: 8,
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        shadowColor: "#64748B",
        borderRadius: 24,
        width: 300,
    },
    leftSidebar: {
        marginLeft: 16,
    },
    rightSidebar: {
        right: 0,
        marginRight: 16,
    },
    wrapper: {
        flex: 1,
        backgroundColor: theme.colors.grey.c200,
    },
    home: {
        flex: 1,
        padding: 32,
        gap: 24,
    },

    content: {
        flex: 1,
    },
});

export default RootLayout;

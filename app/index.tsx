import { StyleSheet, View } from "react-native";
import React from "react";
import theme from "../lib/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import Header from "../components/molecules/Header";
import MessageField from "../components/molecules/MessageField";
import StartLayout from "../components/organisms/StartLayout";
import Sidebar from "../components/organisms/Sidebar";

type Props = {};

const Home = (props: Props) => {
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={styles.wrapper}>
            <Animated.View
                style={[
                    styles.sidebar,
                    {
                        top: top + 32,
                        bottom: bottom + 32,
                        left: -320,
                    },
                ]}
            >
                <Sidebar />
            </Animated.View>
            <Animated.View
                style={[
                    styles.container,
                    { paddingTop: top + 32, paddingBottom: bottom + 32 },
                ]}
            >
                <Header />
                <View style={styles.content}>
                    <StartLayout />
                </View>
                <MessageField />
            </Animated.View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    sidebar: {
        width: 300,
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
        borderRadius: 12,
        marginLeft: 16,
    },
    wrapper: {
        flex: 1,
        backgroundColor: theme.colors.grey.c200,
    },
    container: {
        flex: 1,
        padding: 32,
        gap: 24,
    },

    content: {
        flex: 1,
    },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import theme from "../lib/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import Header from "../components/molecules/Header";
import MessageField from "../components/molecules/MessageField";
import StartLayout from "../components/organisms/StartLayout";
import Sidebar from "../components/organisms/Sidebar";
import { PanGestureHandler } from "react-native-gesture-handler";
import useSidebarAnimate from "../hooks/useSidebarAnimate";

type Props = {};

const Home = (props: Props) => {
    const { top, bottom } = useSafeAreaInsets();
    const {
        contentStyle,
        gestureHandler,
        leftStyle,
        openHistory,
        openPersons,
        rightStyle,
    } = useSidebarAnimate();

    return (
        <View style={[styles.wrapper]}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
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
                        <Sidebar />
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
                        <View style={styles.content}>
                            <StartLayout />
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
                    >
                        <Sidebar />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React from "react";
import { Slot, useNavigation, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const _layout = (props: Props) => {
    const { top, bottom } = useSafeAreaInsets();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={false}
            style={[
                { paddingTop: top + 32, paddingBottom: bottom + 32 },
                styles.container,
            ]}
        >
            <Slot />
        </KeyboardAvoidingView>
    );
};

export default _layout;

const styles = StyleSheet.create({
    container: {
        padding: 32,
        flex: 1,
    },
});

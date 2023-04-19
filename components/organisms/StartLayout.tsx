import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import { ChatTeardropText } from "phosphor-react-native";
import theme from "../../lib/theme";
import client from "../../lib/client";
import { useIsMutating, useMutation } from "@tanstack/react-query";

type Props = {};

const StartLayout = (props: Props) => {
    const testHandler = async () => {
        const res = await client.functions.invoke("new-chat", {
            body: {
                message: "Hi! My name is Nizar!",
            },
        });

        console.log(res.data);
    };

    return (
        <View style={styles.content}>
            <StyledText style={styles.welcomeText}>
                Act as <Text style={styles.innerText}>English teacher...</Text>
            </StyledText>

            <StyledText style={styles.or}>OR</StyledText>
            <TouchableOpacity
                activeOpacity={0.5}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                onPress={() => testHandler()}
            >
                <View style={styles.button}>
                    <ChatTeardropText
                        size={16}
                        color={theme.colors.grey.c800}
                    />
                    <StyledText size="sm" style={styles.buttonText}>
                        Start from a template
                    </StyledText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default StartLayout;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 16,
        marginTop: 16,
    },

    welcomeText: {
        fontSize: 36,
    },
    innerText: {
        color: theme.colors.primary.c200,
    },
    or: {
        fontSize: 14,
        color: theme.colors.grey.c500,
    },
    button: {
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "white",
        borderRadius: 12,
        alignSelf: "flex-start",
        alignItems: "center",
        gap: 16,
    },
    buttonText: {
        color: theme.colors.grey.c800,
    },
});

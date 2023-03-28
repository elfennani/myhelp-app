import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../lib/theme";
import StyledText from "../atoms/StyledText";

type Props = {
    right?: boolean;
};

const ChatMessage = ({ right = false }: Props) => {
    return (
        <View style={{ flexDirection: right ? "row-reverse" : "row" }}>
            <View style={styles.messageContainer}>
                <View
                    style={[
                        styles.message,
                        right
                            ? {
                                  borderTopRightRadius: 0,
                                  backgroundColor: theme.colors.primary[100],
                              }
                            : { borderTopLeftRadius: 0 },
                    ]}
                >
                    <StyledText>ChatMessage</StyledText>
                </View>
                <StyledText
                    style={[styles.time, right ? { textAlign: "right" } : {}]}
                    size="xs"
                >
                    08:21
                </StyledText>
            </View>
        </View>
    );
};

export default ChatMessage;

const styles = StyleSheet.create({
    messageContainer: {
        width: "80%",
    },
    message: {
        padding: 16,
        backgroundColor: theme.colors.grey[100],
        borderRadius: 24,
    },
    time: {
        color: theme.colors.grey[500],
        paddingHorizontal: 24,
        paddingTop: 4,
    },
});

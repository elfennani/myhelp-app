import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { PaperPlaneTilt, Spinner } from "phosphor-react-native";
import theme from "../../lib/theme";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { serverDomain } from "../../lib/config";
import { useRouter, useSearchParams } from "expo-router";
import client from "../../lib/client";
import useMessaging from "../../hooks/useMessaging";
import MessageFieldHeader from "../molecules/MessageFieldHeader";

type Props = {};

const MessageField = ({}: Props) => {
    const [value, setValue] = useState("");
    const { isCreatingChat, isMessagingChat, sendMessage } = useMessaging(() =>
        setValue("")
    );

    const isDisabled = isCreatingChat || isMessagingChat || value == "";

    return (
        <View>
            <MessageFieldHeader textLength={value.trim().length} />
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => !isCreatingChat && setValue(text)}
                    placeholder="Ask me something..."
                    placeholderTextColor={theme.colors.grey.c400}
                    multiline
                />
                <View style={styles.sendButton}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        hitSlop={{
                            top: 16,
                            bottom: 16,
                            left: 16,
                            right: 16,
                        }}
                        onPress={() => sendMessage(value)}
                        disabled={isDisabled}
                    >
                        {isCreatingChat ? (
                            <Spinner size={18} color={theme.colors.grey.c600} />
                        ) : (
                            <PaperPlaneTilt
                                size={18}
                                color={
                                    isDisabled
                                        ? theme.colors.grey.c300
                                        : theme.colors.grey.c600
                                }
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MessageField;

const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: "white",
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        shadowColor: "#64748B",
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        padding: 16,
        paddingVertical: 12,
        fontSize: 14,
        fontFamily: theme.fontWeight.regular,
        flex: 1,
        color: theme.colors.grey.c900,
    },
    sendButton: {
        paddingHorizontal: 16,
    },
});

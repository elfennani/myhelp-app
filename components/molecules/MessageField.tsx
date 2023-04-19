import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { PaperPlaneTilt, Spinner } from "phosphor-react-native";
import theme from "../../lib/theme";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { serverDomain } from "../../lib/config";
import { useRouter, useSearchParams } from "expo-router";
import client from "../../lib/client";

type Props = {
    onSubmit?(message: string): void;
};

const MessageField = ({ onSubmit }: Props) => {
    const [value, setValue] = useState("");
    const router = useRouter();
    const { chatId } = useSearchParams();
    const queryClient = useQueryClient();

    const createChat = useMutation(
        ["chat"],
        async (message: string) => {
            const { data, error } = await client.functions.invoke("new-chat", {
                body: {
                    message: message,
                },
            });

            if (error) throw error;
            return data;
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(["chat", data.id + ""], data.messages);
                queryClient.invalidateQueries(["history"]);
                router.push(`/chat/${data.id}`);
                setValue("");
            },
        }
    );

    const messageChat = useMutation(
        ["chat", chatId],
        async ({ chatId, message }: { message: string; chatId: string }) => {
            const { data, error } = await client.functions.invoke(
                "message-chat",
                {
                    body: {
                        chat_id: chatId,
                        message,
                    },
                }
            );

            if (error) throw error;
            return data;
        },
        {
            onMutate: (message) => {
                queryClient.setQueryData(["chat", chatId], (prev: any) => [
                    ...prev,
                    {
                        role: "user",
                        content: message.message,
                        loading: true,
                    },
                ]);
            },
            onSuccess: (data) => {
                queryClient.setQueryData(["chat", chatId], data);
            },
        }
    );

    const submitHandler = () => {
        if (chatId && typeof chatId == "string") {
            messageChat.mutate({ chatId, message: value });
            setValue("");
            return;
        }
        createChat.mutate(value);
    };

    const isDisabled =
        createChat.isLoading || messageChat.isLoading || value == "";
    const isLoading = createChat.isLoading;

    return (
        <View style={styles.searchWrapper}>
            <TextInput
                style={styles.search}
                value={value}
                onChangeText={(text) => !isLoading && setValue(text)}
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
                    onPress={submitHandler}
                    disabled={isDisabled}
                >
                    {isLoading ? (
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
    );
};

export default MessageField;

const styles = StyleSheet.create({
    searchWrapper: {
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
    search: {
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

import { StyleSheet } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { serverDomain } from "../../../lib/config";
import ChatMessages from "../../../components/organisms/ChatMessages";
import useDoubleReturn from "../../../hooks/useDoubleReturn";
import client from "../../../lib/client";
import { Message } from "../../../types";

type Props = {};

const ChatPage = (props: Props) => {
    const { chatId, message } = useSearchParams();
    const query = useQuery(
        ["chat", chatId],
        async () => {
            await new Promise((res) => setTimeout(res, 5000));
            const res = await client
                .from("messages")
                .select("*")
                .eq("chat_id", chatId);

            if (res.error) throw res.error;

            return res.data;
        },
        {
            select: (data) => {
                return data.map(
                    ({ content, role }): Message => ({
                        content,
                        role: role as "user" | "assistant",
                    })
                );
            },
        }
    );
    useDoubleReturn();

    if (!query.data) return <></>;

    return <ChatMessages messages={query.data} />;
};

export default ChatPage;

const styles = StyleSheet.create({});

import { Alert, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    usePathname,
    useSearchParams,
    useLocalSearchParams,
    useNavigation,
} from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { serverDomain } from "../../lib/config";
import ChatMessages from "../../components/organisms/ChatMessages";

type Props = {};

const ChatPage = (props: Props) => {
    const { chatId, message } = useSearchParams();
    const [isGoingBack, setIsGoingBack] = useState(false);
    const nav = useNavigation();
    const query = useQuery(["chat", chatId], async () => {
        const res = await fetch(`${serverDomain}/chat/${chatId}`);
        return (await res.json()).chat;
    });

    useEffect(() => {
        const listener = (e: any) => {
            if (e.data.action.type !== "GO_BACK") return;
            if (!isGoingBack) {
                e.preventDefault();
            } else {
                return;
            }

            ToastAndroid.show("Go back twice to return", ToastAndroid.SHORT);
            setIsGoingBack(true);
            setTimeout(() => setIsGoingBack(false), 1000);
        };
        nav.addListener("beforeRemove", listener);

        return () => {
            nav.removeListener("beforeRemove", listener);
        };
    }, [isGoingBack]);

    if (!query.data) return <></>;

    return <ChatMessages messages={query.data.messages} />;
};

export default ChatPage;

const styles = StyleSheet.create({});

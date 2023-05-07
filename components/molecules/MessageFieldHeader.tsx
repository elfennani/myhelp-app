import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import StyledText from "../atoms/StyledText";
import { Coin } from "phosphor-react-native";
import theme from "../../lib/theme";
import { useQueryClient, useIsFetching } from "@tanstack/react-query";
import { useSearchParams } from "expo-router";

type Props = {
    textLength: number;
};

const MessageFieldHeader = ({ textLength }: Props) => {
    const { chatId } = useSearchParams();
    const queryClient = useQueryClient();
    const isChatLoading = useIsFetching(["chat", chatId]);
    const [messagesLength, setMessagesLength] = useState<number>(0);

    useEffect(() => {
        if (!chatId || typeof chatId != "string") return;
        const data = queryClient.getQueryData<any[] | undefined>([
            "chat",
            chatId,
        ]);
        if (!data) {
            setMessagesLength(0);
            return;
        }

        setMessagesLength(data.length);
    }, [isChatLoading]);

    return (
        <View style={styles.header}>
            <View>
                <StyledText style={styles.textLengthText}>
                    {textLength}/200
                </StyledText>
            </View>
            <View style={styles.coins}>
                <StyledText style={styles.coinText}>
                    {chatId ? Math.ceil(messagesLength / 20) : 2}
                </StyledText>
                <Coin size={14} weight="fill" color="#fbbf24" />
            </View>
        </View>
    );
};

export default MessageFieldHeader;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        paddingTop: 12,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    coins: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
    },
    coinText: {
        fontSize: 12,
        color: "#fbbf24",
    },
    textLengthText: {
        fontSize: 12,
        color: theme.colors.grey.c400,
    },
});

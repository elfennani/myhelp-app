import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import { useRouter, useSearchParams } from "expo-router";

type Props = {
    name: string;
    id: string;
    timeCreated: Date;
};

const HistoryItem = (props: Props) => {
    const { chatId } = useSearchParams();
    const router = useRouter();

    const loadChatHandler = () => {
        if (!chatId) {
            router.push(`/chat/${props.id}`);
            return;
        }

        router.replace(`/chat/${props.id}`);
    };

    return (
        <TouchableHighlight
            underlayColor={theme.colors.grey.c100}
            onPress={loadChatHandler}
            style={styles.item}
        >
            <>
                <StyledText style={styles.name} numberOfLines={1}>
                    {props.name}
                </StyledText>
                <StyledText size="xs" style={styles.time}>
                    3 Apr
                </StyledText>
            </>
        </TouchableHighlight>
    );
};

export default HistoryItem;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    name: {
        flex: 1,
    },
    time: {
        color: theme.colors.grey.c400,
    },
});

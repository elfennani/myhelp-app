import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import { useRouter, useSearchParams } from "expo-router";
import { useSidebar } from "../../contexts/sidebar";

type Props = {
    name: string;
    id: string;
    timeCreated: Date;
};

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const HistoryItem = ({ id, name, timeCreated }: Props) => {
    const { chatId } = useSearchParams();
    const router = useRouter();
    const { closeSidebar } = useSidebar();

    const loadChatHandler = () => {
        closeSidebar();
        if (!chatId) {
            router.push(`/chat/${id}`);
            return;
        }

        router.replace(`/chat/${id}`);
    };

    return (
        <TouchableHighlight
            underlayColor={theme.colors.grey.c100}
            onPress={loadChatHandler}
            style={styles.item}
        >
            <>
                <StyledText style={styles.name} numberOfLines={1}>
                    {name}
                </StyledText>
                <StyledText size="xs" style={styles.time}>
                    {timeCreated.getDate()} {months[timeCreated.getMonth()]}
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

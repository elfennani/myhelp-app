import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import { TouchableHighlight } from "react-native-gesture-handler";
import { IconContext, Pencil } from "phosphor-react-native";
import HistoryItem from "../molecules/HistoryItem";
import { useQuery } from "@tanstack/react-query";
import { serverDomain } from "../../lib/config";
import client from "../../lib/client";

type Props = {};

const ChatHistory = (props: Props) => {
    const { data } = useQuery(["history"], async () => {
        const { data, error } = await client
            .from("chats")
            .select("*")
            .throwOnError();
        if (!data) throw new Error();

        return data;
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <HistoryItem
                        id={item.id.toString()}
                        name={item.name as string}
                        timeCreated={new Date(item.created_at as string)}
                    />
                )}
            />
        </View>
    );
};

export default ChatHistory;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 8,
        flex: 1,
    },
});

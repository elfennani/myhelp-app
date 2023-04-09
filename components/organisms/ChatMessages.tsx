import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Message } from "../../types";
import UserMessage from "../molecules/UserMessage";
import AssistantMessage from "../molecules/AssistantMessage";

type Props = {
    messages: Message[];
};

const ChatMessages = (props: Props) => {
    return (
        <>
            <FlatList
                data={props.messages}
                contentContainerStyle={{
                    gap: 32,
                    padding: 32,
                    flexDirection: "column-reverse",
                }}
                style={{ margin: -32, marginTop: 0 }}
                inverted
                renderItem={({ item }) =>
                    item.role == "user" ? (
                        <UserMessage
                            content={item.content}
                            isLoading={item.loading}
                        />
                    ) : (
                        <AssistantMessage content={item.content} />
                    )
                }
            />
        </>
    );
};

export default ChatMessages;

const styles = StyleSheet.create({});

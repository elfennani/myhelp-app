import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Section from "../../components/molecules/Section";
import InputField from "../../components/molecules/InputField";
import SendButton from "../../components/molecules/SendButton";
import Conversation from "../../components/molecules/Conversation";
import { MaterialIcons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import ChatMessage from "../../components/molecules/ChatMessage";

type Props = {};

const ChatPage = (props: Props) => {
    return (
        <View style={styles.container}>
            <Section
                style={styles.chatSection}
                containerStyle={styles.chatSectionContainer}
            >
                <Conversation
                    name="English Translator"
                    cut={1}
                    icon={
                        <MaterialIcons
                            name="translate"
                            size={32}
                            color="white"
                        />
                    }
                />
                <ChatMessage />
                <ChatMessage right />
            </Section>
            <View style={styles.footer}>
                <InputField style={styles.input} />
                <SendButton />
            </View>
        </View>
    );
};

export default ChatPage;

const styles = StyleSheet.create({
    container: { flex: 1, gap: 16 },
    chatSection: { flex: 1 },
    chatSectionContainer: { flex: 1, gap: 24 },
    footer: {
        flexDirection: "row",
        gap: 8,
    },
    input: {
        flex: 1,
    },
});

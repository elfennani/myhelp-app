import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";

type Props = {
    content: string;
};

const AssistantMessage = ({ content }: Props) => {
    return (
        <View>
            <StyledText style={styles.text}>{content}</StyledText>
        </View>
    );
};

export default AssistantMessage;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: theme.colors.grey.c800,
        lineHeight: 30,
    },
});

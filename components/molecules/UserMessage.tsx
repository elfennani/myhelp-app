import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "../atoms/StyledText";
import { Spinner } from "phosphor-react-native";

type Props = {
    content: string;
    isLoading?: boolean;
};

const UserMessage = (props: Props) => {
    return (
        <View style={styles.container}>
            {props.isLoading && <Spinner />}
            <View style={styles.message}>
                <StyledText size="sm">{props.content}</StyledText>
            </View>
        </View>
    );
};

export default UserMessage;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 16,
    },
    message: {
        padding: 16,
        backgroundColor: "white",
        borderRadius: 12,
        maxWidth: "85%",
        borderBottomRightRadius: 4,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        shadowColor: "#64748B",
    },
});

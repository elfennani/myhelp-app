import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { ReactNode } from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import { IconContext } from "phosphor-react-native";

type Props = {
    title: string;
    onPress?(): void;
    color?: string;
    highlightColor?: string;
    textColor?: string;
    icon?: ReactNode;
    disabled?: boolean;
};

const StyledButton = (props: Props) => {
    return (
        <TouchableHighlight
            style={[
                styles.button,
                {
                    backgroundColor: props.disabled
                        ? theme.colors.grey.c500
                        : props.color || theme.colors.primary.c500,
                },
            ]}
            disabled={props.disabled}
            onPress={props.onPress}
            underlayColor={props.highlightColor || theme.colors.primary.c600}
        >
            <>
                <IconContext.Provider
                    value={{
                        color: props.textColor || "white",
                        size: 16,
                        weight: "bold",
                    }}
                >
                    {props.icon}
                </IconContext.Provider>
                <StyledText
                    style={[styles.text, { color: props.textColor || "white" }]}
                >
                    {props.title}
                </StyledText>
            </>
        </TouchableHighlight>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    button: {
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        flexDirection: "row",
        gap: 16,
    },
    text: {
        fontSize: 14,
    },
});

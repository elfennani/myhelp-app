import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import theme from "../../lib/theme";

type Props = TextProps & {
    weight?: "regular" | "bold" | "medium";
    size?: "xs" | "sm" | "base" | "lg" | "xl";
};

const StyledText = ({ weight = "regular", size = "base", ...props }: Props) => {
    return (
        <Text
            {...props}
            style={[
                {
                    fontSize: theme.fontSize[size],
                    fontFamily: theme.fontWeight[weight],
                },
                props.style,
            ]}
        >
            {props.children}
        </Text>
    );
};

export default StyledText;

const styles = StyleSheet.create({});

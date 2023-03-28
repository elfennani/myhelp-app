import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Sizes = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    xxxl: 40,
};

type Props = {
    size?: keyof typeof Sizes;
    horizontal?: boolean;
};

const Spacer = ({ size = "md", horizontal = false }: Props) => {
    return (
        <View
            style={
                horizontal ? { width: Sizes[size] } : { height: Sizes[size] }
            }
        ></View>
    );
};

export default Spacer;

const styles = StyleSheet.create({});

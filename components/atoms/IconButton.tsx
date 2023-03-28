import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import theme from "../../lib/theme";

type Props = {
    onPress?(): void;
    color?: string;
    icon: ReactNode;
};

const IconButton = ({ icon, onPress, color }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
            <View
                style={[
                    styles.button,
                    { backgroundColor: color || theme.colors.primary[500] },
                ]}
            >
                {icon}
            </View>
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary[500],
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 2,
    },
});

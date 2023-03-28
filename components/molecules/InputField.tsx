import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import React from "react";
import theme from "../../lib/theme";

type Props = {
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
};

const InputField = ({ inputStyle, style }: Props) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder="Send message"
            />
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        borderRadius: 24,
        paddingHorizontal: 16,
        height: 48,
    },
    input: {
        fontFamily: theme.fontWeight.regular,
        fontSize: theme.fontSize.base,
        flex: 1,
    },
});

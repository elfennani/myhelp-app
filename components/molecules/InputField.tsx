import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import React, { ReactNode, useRef } from "react";
import StyledText from "../atoms/StyledText";
import { IconContext } from "phosphor-react-native";
import theme from "../../lib/theme";

type Props = {
    title: string;
    icon?: ReactNode;
    placeholder?: string;
    footerComponent?: ReactNode;
} & TextInputProps;

const InputField = React.forwardRef(
    (
        { title, footerComponent, icon, placeholder, ...props }: Props,
        ref: React.ForwardedRef<TextInput>
    ) => {
        return (
            <View style={styles.container}>
                <StyledText style={styles.title}>{title}</StyledText>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={ref}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.grey.c400}
                        style={styles.input}
                        selectionColor={theme.colors.grey.c300}
                        {...props}
                    />
                    <IconContext.Provider
                        value={{
                            color: theme.colors.grey.c400,
                            size: 16,
                        }}
                    >
                        {icon}
                    </IconContext.Provider>
                </View>
                {footerComponent}
            </View>
        );
    }
);

export default InputField;

const styles = StyleSheet.create({
    container: {
        gap: 4,
    },
    title: {
        paddingHorizontal: 8,
        fontSize: 14,
        color: theme.colors.grey.c500,
    },
    inputContainer: {
        backgroundColor: "white",
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        shadowColor: "#64748B",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 16,
    },
    input: {
        fontFamily: theme.fontWeight.regular,
        padding: 16,
        paddingVertical: 12,
        fontSize: 14,
        flex: 1,
    },
});

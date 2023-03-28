import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import Spacer from "../atoms/Spacer";

type Props = {
    title?: string;
    children?: ReactNode | ReactNode[];
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
};

const Section = ({ title, children, containerStyle, style }: Props) => {
    return (
        <View style={style}>
            {title && (
                <>
                    <StyledText weight="medium" size="xs" style={styles.title}>
                        {title}
                    </StyledText>
                    <Spacer size="sm" />
                </>
            )}
            <View style={[styles.container, containerStyle]}>{children}</View>
        </View>
    );
};

export default Section;

const styles = StyleSheet.create({
    title: {
        textTransform: "uppercase",
        color: theme.colors.grey[500],
        paddingHorizontal: 24,
    },
    container: {
        width: "100%",
        padding: 24,
        backgroundColor: "white",
        borderRadius: 24,
    },
});

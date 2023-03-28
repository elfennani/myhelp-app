import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React, { ReactNode } from "react";
import { Image } from "expo-image";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type Props = {
    color?: string;
    name: string;
    sub?: string;
    time?: string;
    icon: ReactNode | ReactNode[];
    cut?: number;
};

const Conversation = ({
    name,
    sub,
    color = theme.colors.primary[300],
    time,
    icon,
    cut = 2,
}: Props) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/chat/1")}
        >
            <View style={styles.container}>
                <View style={[styles.icon, { backgroundColor: color }]}>
                    {icon}
                </View>
                <View style={styles.content}>
                    <View style={styles.head}>
                        <StyledText
                            size="base"
                            weight="medium"
                            numberOfLines={1}
                        >
                            {name}
                        </StyledText>
                        <StyledText
                            style={styles.time}
                            size="xs"
                            weight="medium"
                        >
                            {time}
                        </StyledText>
                    </View>
                    {sub && (
                        <StyledText
                            style={styles.subtext}
                            numberOfLines={cut}
                            size="sm"
                        >
                            {sub}
                        </StyledText>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Conversation;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 18,
        alignItems: "center",
    },
    icon: {
        width: 56,
        height: 56,
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        gap: 6,
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    time: {
        color: theme.colors.grey[500],
    },
    subtext: {
        color: theme.colors.grey[400],
    },
});

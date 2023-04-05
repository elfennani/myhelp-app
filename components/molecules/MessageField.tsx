import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { PaperPlaneTilt } from "phosphor-react-native";
import theme from "../../lib/theme";

type Props = {};

const MessageField = (props: Props) => {
    return (
        <View style={styles.searchWrapper}>
            <TextInput
                style={styles.search}
                placeholder="Ask me something..."
                placeholderTextColor={theme.colors.grey.c400}
            />
            <View style={styles.sendButton}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    hitSlop={{
                        top: 16,
                        bottom: 16,
                        left: 16,
                        right: 16,
                    }}
                    onPress={() => console.log("press")}
                >
                    <PaperPlaneTilt size={18} color={theme.colors.grey.c600} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MessageField;

const styles = StyleSheet.create({
    searchWrapper: {
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
    },
    search: {
        padding: 16,
        fontSize: 14,
        fontFamily: theme.fontWeight.regular,
        height: 18 + 16 * 2,
        flex: 1,
        color: theme.colors.grey.c900,
    },
    sendButton: {
        paddingHorizontal: 16,
    },
});

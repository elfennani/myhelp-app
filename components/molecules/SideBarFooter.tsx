import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Coin, Info, Plus } from "phosphor-react-native";
import StyledText from "../atoms/StyledText";
import theme from "../../lib/theme";

type Props = {};

const SideBarFooter = (props: Props) => {
    return (
        <View style={styles.footer}>
            <View style={styles.separator}></View>
            <TouchableHighlight
                onPress={() => {}}
                style={[styles.button, styles.coinButton]}
                underlayColor={"#fef3c7"}
            >
                <>
                    <View style={styles.coin}>
                        <Coin color="#fbbf24" weight="fill" size={18} />
                        <StyledText style={styles.coinText}>123</StyledText>
                    </View>
                    <Info size={16} color="#fbbf24" weight="bold" />
                </>
            </TouchableHighlight>
        </View>
    );
};

export default SideBarFooter;

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        position: "relative",
    },
    separator: {
        position: "absolute",
        height: 1,
        backgroundColor: theme.colors.grey.c200,
        left: 16,
        right: 16,
    },
    button: {
        padding: 16,
        flexDirection: "row",
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
    },
    coinButton: {
        backgroundColor: "#fffbeb",
    },
    coin: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    coinText: {
        fontFamily: theme.fontWeight.medium,
        color: "#fbbf24",
    },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../lib/theme";

type Props = {};

const Separator = (props: Props) => {
    return <View style={styles.separator}></View>;
};

export default Separator;

const styles = StyleSheet.create({
    separator: {
        marginLeft: 65,
        height: 1,
        backgroundColor: theme.colors.grey[100],
    },
});

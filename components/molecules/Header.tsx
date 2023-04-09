import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChatsTeardrop, IconContext, UsersThree } from "phosphor-react-native";
import theme from "../../lib/theme";

type Props = {
    onOpenHistory(): void;
    onOpenPersons(): void;
};

const Header = ({ onOpenHistory, onOpenPersons }: Props) => {
    return (
        <View style={styles.header}>
            <IconContext.Provider value={{ color: theme.colors.grey.c900 }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    hitSlop={{
                        top: 16,
                        bottom: 16,
                        left: 16,
                        right: 16,
                    }}
                    onPress={() => onOpenHistory()}
                >
                    <ChatsTeardrop />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        hitSlop={{
                            top: 16,
                            bottom: 16,
                            left: 16,
                            right: 16,
                        }}
                        onPress={() => onOpenPersons()}
                    >
                        <UsersThree />
                    </TouchableOpacity>
                </View>
            </IconContext.Provider>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

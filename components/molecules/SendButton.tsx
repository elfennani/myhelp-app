import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import IconButton from "../atoms/IconButton";

type Props = {};

const SendButton = (props: Props) => {
    return (
        <IconButton
            icon={<FontAwesome name="send" size={16} color="white" />}
        />
    );
};

export default SendButton;

const styles = StyleSheet.create({});

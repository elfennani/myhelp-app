import { Button, StyleSheet } from "react-native";
import React from "react";
import StartLayout from "../../components/organisms/StartLayout";
import { Link } from "expo-router";

type Props = {};

const Home = (props: Props) => {
    return (
        <>
            <Link href="/signin">Signin</Link>
            <StartLayout />
        </>
    );
};

export default Home;

const styles = StyleSheet.create({});

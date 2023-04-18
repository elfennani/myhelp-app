import {
    StyleSheet,
    Text,
    TextInputProps,
    ToastAndroid,
    View,
} from "react-native";
import React, { useRef, useState } from "react";
import StyledText from "../../components/atoms/StyledText";
import InputField from "../../components/molecules/InputField";
import { At, GoogleLogo, Password } from "phosphor-react-native";
import StyledButton from "../../components/molecules/StyledButton";
import { Link } from "expo-router";
import theme from "../../lib/theme";
import { TextInput } from "react-native-gesture-handler";
import { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import client from "../../lib/client";

type Props = {};

const SignIn = (props: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogginIn, setIsLogginIn] = useState(false);
    const passRef = useRef<TextInput>(null);
    const loginHandler = async () => {
        if (!email || !password) return;
        setIsLogginIn(true);

        const signIn = await client.auth.signInWithPassword({
            email: email,
            password: password,
        });

        setIsLogginIn(false);
        if (signIn.error) {
            ToastAndroid.show(signIn.error.message, ToastAndroid.SHORT);
            return;
        }

        ToastAndroid.show("Signed In", ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <StyledText style={styles.title}>Sign in</StyledText>
            <View style={styles.form}>
                <InputField
                    title="Email"
                    placeholder="example@domain.xyz"
                    icon={<At />}
                    keyboardType="email-address"
                    returnKeyType="next"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    onSubmitEditing={() => passRef.current?.focus()}
                    value={email}
                    onChangeText={setEmail}
                    editable={!isLogginIn}
                />
                <InputField
                    ref={passRef}
                    title="Password"
                    editable={!isLogginIn}
                    placeholder="********"
                    icon={<Password />}
                    returnKeyType="done"
                    textContentType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    footerComponent={
                        <Link href="#" style={styles.passwordFooter}>
                            Forgot Password?
                        </Link>
                    }
                />
                <StyledButton
                    title="Login with Email"
                    onPress={() => loginHandler()}
                    disabled={isLogginIn}
                />
                <StyledText style={styles.or}>OR</StyledText>
                <StyledButton
                    title="Login with Google"
                    color="white"
                    textColor={theme.colors.grey.c800}
                    highlightColor={theme.colors.grey.c50}
                    icon={<GoogleLogo />}
                />
            </View>
            <StyledText style={[styles.footer]}>
                Don’t have an account yet?{" "}
                <Link
                    href="/signup"
                    style={{ color: theme.colors.primary.c500 }}
                >
                    Create one
                </Link>
            </StyledText>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        gap: 32,
        flex: 1,
    },
    title: {
        fontSize: 36,
    },
    form: {
        gap: 16,
        flex: 1,
    },
    passwordFooter: {
        fontFamily: theme.fontWeight.regular,
        color: theme.colors.primary.c500,
        textAlign: "right",
        paddingHorizontal: 8,
    },
    or: {
        paddingVertical: 8,
        fontSize: 14,
        color: theme.colors.grey.c500,
    },
    footer: {
        textAlign: "center",
        fontSize: 14,
        color: theme.colors.grey.c500,
    },
});

import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    Navigator,
    Slot,
    SplashScreen,
    useRouter,
    useSegments,
    Redirect,
} from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatIdProvider from "../providers/ChatIdProvider";
import { StatusBar } from "expo-status-bar";
import theme from "../lib/theme";
import {
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    useFonts,
} from "@expo-google-fonts/outfit";
import { Session } from "@supabase/supabase-js";
import client from "../lib/client";

type Props = {};

const queryClient = new QueryClient();

const MainLayout = (props: Props) => {
    const [fontIsLoaded] = useFonts({
        Outfit_400: Outfit_400Regular,
        Outfit_500: Outfit_500Medium,
        Outfit_600: Outfit_600SemiBold,
    });
    const [user, setUser] = useState<null | boolean>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [segement] = useSegments();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const session = await client.auth.getSession();
            setSession(session.data.session);
            setUser(!!session.data.session);
        })();

        const {
            data: { subscription },
        } = client.auth.onAuthStateChange((ev, session) => {
            setSession(session);
            setUser(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        if (segement != "(auth)" && user === false) {
            router.replace("/signin");
        } else if (segement == "(auth)" && user === true) {
            router.replace("/");
        }
    }, [segement, user]);

    if (!fontIsLoaded || user == null)
        return (
            <Navigator>
                <StatusBar translucent style="auto" />
                <SplashScreen />
            </Navigator>
        );

    return (
        <QueryClientProvider client={queryClient}>
            <ChatIdProvider>
                <StatusBar translucent style="auto" />
                <Navigator>
                    <View style={[styles.wrapper]}>
                        <Slot />
                    </View>
                </Navigator>
            </ChatIdProvider>
        </QueryClientProvider>
    );
};

export default MainLayout;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: theme.colors.grey.c200,
    },
});

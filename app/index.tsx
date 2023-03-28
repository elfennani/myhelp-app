import { StyleSheet, View } from "react-native";
import React from "react";
import Section from "../components/molecules/Section";
import Spacer from "../components/atoms/Spacer";
import Conversation from "../components/molecules/Conversation";
import Separator from "../components/atoms/Separator";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

type Props = {};

const Home = (props: Props) => {
    return (
        <View style={styles.container}>
            <Section
                title="Continue conversation"
                containerStyle={styles.sectionContent}
            >
                <Conversation
                    name="English Translator"
                    sub="What does this mean: “istanbulu cok seviyom burada olmak cok guzel”"
                    time="08:30"
                    cut={1}
                    icon={
                        <MaterialIcons
                            name="translate"
                            size={32}
                            color="white"
                        />
                    }
                />
                <Separator />
                <Conversation
                    name="Travel Guide"
                    sub="I am in Istanbul/Beyoğlu and I want to visit only museums."
                    time="02:21"
                    cut={1}
                    color="#7dd3fc"
                    icon={
                        <MaterialIcons name="explore" size={32} color="white" />
                    }
                />
            </Section>
            <Spacer size="xxl" />
            <Section
                title="Start a conversation"
                containerStyle={styles.sectionContent}
            >
                <Conversation
                    name="Relationship Coach"
                    sub="Get relationship advice"
                    color="#f0abfc"
                    icon={<AntDesign name="hearto" size={32} color="white" />}
                />
                <Separator />
                <Conversation
                    name="Screenwriter"
                    sub="develop engaging and creative scripts"
                    color="#67e8f9"
                    icon={<Entypo name="open-book" size={32} color="white" />}
                />
                <Separator />
                <Conversation
                    name="Advertiser"
                    sub="create a campaign to promote a product or service"
                    color="#fde047"
                    icon={<FontAwesome5 name="ad" size={32} color="white" />}
                />
            </Section>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        justifyContent: "flex-start",
        flex: 1,
        paddingTop: 24,
    },
    sectionContent: {
        gap: 16,
    },
});

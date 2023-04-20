import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "expo-router";
import client from "../lib/client";

const useMessaging = (onSuccess: () => void) => {
    const router = useRouter();
    const { chatId } = useSearchParams();
    const queryClient = useQueryClient();

    const createChat = useMutation(
        ["chat"],
        async (message: string) => {
            const { data, error } = await client.functions.invoke("new-chat", {
                body: {
                    message: message,
                },
            });

            if (error) throw error;
            return data;
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(["chat", data.id + ""], data.messages);
                queryClient.invalidateQueries(["history"]);
                router.push(`/chat/${data.id}`);
                onSuccess();
            },
        }
    );

    const messageChat = useMutation(
        ["chat", chatId],
        async ({ chatId, message }: { message: string; chatId: string }) => {
            const { data, error } = await client.functions.invoke(
                "message-chat",
                {
                    body: {
                        chat_id: chatId,
                        message,
                    },
                }
            );

            if (error) throw error;
            return data;
        },
        {
            onMutate: (message) => {
                queryClient.setQueryData(["chat", chatId], (prev: any) => [
                    ...prev,
                    {
                        role: "user",
                        content: message.message,
                        loading: true,
                    },
                ]);
            },
            onSuccess: (data) => {
                queryClient.setQueryData(["chat", chatId], data);
            },
        }
    );

    const sendMessage = (message: string) => {
        if (chatId && typeof chatId == "string") {
            messageChat.mutate({ chatId, message: message });
            onSuccess();
            return;
        }
        createChat.mutate(message);
    };

    return {
        sendMessage,
        isCreatingChat: createChat.isLoading,
        isMessagingChat: messageChat.isLoading,
    };
};

export default useMessaging;

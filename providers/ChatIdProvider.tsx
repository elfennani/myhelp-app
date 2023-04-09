import React, { ReactNode, useState } from "react";
import ChatIdContext from "../contexts/ChatIdContext";

type Props = {
    children: ReactNode | ReactNode[];
};

const ChatIdProvider = ({ children }: Props) => {
    const [chatId, setChatId] = useState<string | null>(null);
    return (
        <ChatIdContext.Provider value={[chatId, setChatId]}>
            {children}
        </ChatIdContext.Provider>
    );
};

export default ChatIdProvider;

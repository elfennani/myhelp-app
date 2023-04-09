import { createContext } from "react";

export default createContext<[string | null, (chatId: string | null) => void]>([
    null,
    () => {},
]);

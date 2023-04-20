import { createContext, useContext } from "react";

export const SidebarContext = createContext<{
    openSidebar(): void;
    closeSidebar(): void;
}>({
    closeSidebar() {},
    openSidebar() {},
});

export const useSidebar = () => useContext(SidebarContext);

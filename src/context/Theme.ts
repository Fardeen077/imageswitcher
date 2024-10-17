import { createContext, useContext } from "react";

interface Context {
    themeMode: string;
    darkTheme: () => void;
    lightTheme: () => void;
}

export const themeContext = createContext<Context>({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
    return useContext(themeContext);
}
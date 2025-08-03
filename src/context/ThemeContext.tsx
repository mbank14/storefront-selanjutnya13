import { createContext, useState } from "react";


export const ThemeContext = createContext({});

export default function ThemeProvider ({children}: {children: React.ReactNode}){
    const [isDark , setIsDark] = useState<boolean>(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}
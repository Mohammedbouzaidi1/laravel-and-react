import React, { createContext, useState } from "react";

export const darkModeContext = createContext(null);
export default function ContextProvider  ({children})  {
    const [darkMode, setDarkMode] = useState(false);
    return(
        <>
            <darkModeContext.Provider value={{ darkMode,setDarkMode }}>
                {children}
            </darkModeContext.Provider>
        </>
    )
};

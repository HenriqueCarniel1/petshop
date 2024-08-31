import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    clicked: boolean;
    setClicked: (value: boolean | ((prev: boolean) => boolean)) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ clicked, setClicked }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
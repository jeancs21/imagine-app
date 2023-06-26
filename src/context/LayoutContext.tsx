import React, { createContext, FunctionComponent, ReactElement, useContext, useState } from "react";

export const LayoutContext = createContext({
    isDrawerOpened: false,
    setIsDrawerOpened: (value: boolean) => {
        value;
    }
});

export const LayoutProvider: FunctionComponent<{ children: ReactElement }> = (props) => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);

    const value = {
        isDrawerOpened,
        setIsDrawerOpened
    };

    return <LayoutContext.Provider value={value}>{props.children}</LayoutContext.Provider>
};

export const useLayoutContext = () => useContext(LayoutContext);
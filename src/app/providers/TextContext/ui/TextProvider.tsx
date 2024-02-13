import React, { FC, useMemo, useState } from "react";
import { TextContext, TextContextProps, } from "../lib/TextContext";
import { TextContextData } from "../lib/type";

interface TextProviderProps {
    children: React.ReactNode;
}

const ModalProvider: FC<TextProviderProps> = ({ children }) => {
    const [text, setText] = useState<TextContextData>()

    const defaultProps = useMemo(() => ({
        text,
        setText,
    }), [text])

    return (
        <TextContext.Provider value={defaultProps}>
            {children}
        </TextContext.Provider>
    )
}

export default ModalProvider;
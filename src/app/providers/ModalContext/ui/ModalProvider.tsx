import React, { FC, useMemo, useState } from "react";
import { MoadalContext } from "../lib/ModalContext";

interface ModalProviderProps {
    children: React.ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const defaultModal = false;
    const [modal, setModal] = useState(defaultModal)

    const defaultProps = useMemo(() => ({
        modal,
        setModal,
    }), [modal])

    return (
        <MoadalContext.Provider value={defaultProps}>
            {children}
        </MoadalContext.Provider>
    )
}

export default ModalProvider;
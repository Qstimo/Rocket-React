import { createContext } from "react";

export interface MoadalContextProps {
    modal: boolean;
    setModal: (tog: boolean) => void;
}

export const MoadalContext = createContext<MoadalContextProps>({
    modal: false,
    setModal: function (tog: boolean): void {
        throw new Error("Function not implemented.");
    }
})
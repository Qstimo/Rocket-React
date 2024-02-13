import { createContext } from "react";
import { TextContextData } from "./type";

export interface TextContextProps {
    text?: TextContextData;
    setText?: (text: TextContextData) => void;
}


export const TextContext = createContext<TextContextProps>({})
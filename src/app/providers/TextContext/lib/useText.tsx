import { useContext } from "react";
import { TextContext } from "./TextContext";
import axios from "axios";
import { TextContextData } from "./type";

interface UseTextResult {
    getText: () => void;
    text: TextContextData | undefined;
}
export function useText(): UseTextResult {
    const { text, setText } = useContext(TextContext);
    const getText = () => {
        if (setText) {
            axios
                .get('https://64cb8751700d50e3c7060db8.mockapi.io/RocketText')
                .then(response => { setText(response.data[0]); })
                .catch(error => console.log(error));
        }
    }
    return {
        text,
        getText
    }
}
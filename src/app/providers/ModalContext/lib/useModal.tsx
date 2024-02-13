import { useContext } from "react";
import { MoadalContext } from "./ModalContext";

interface UseModalResult {
    toggleModal: () => void;
    modal: boolean;
}
export function useModal(): UseModalResult {
    const { modal, setModal } = useContext(MoadalContext);
    const toggleModal = () => {
        const tog = modal ? modal : false;
        setModal(!tog)
    }
    return {
        modal,
        toggleModal
    }
}
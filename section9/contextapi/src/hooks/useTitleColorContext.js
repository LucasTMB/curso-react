import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    {!context && console.log("Context não encontrado!")}

    return context;
}
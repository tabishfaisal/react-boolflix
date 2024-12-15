import { useContext } from "react";
import List from "./List";
import GlobalContext from "./context/GlobalContext";

export default function Main(){
    const {movies} = useContext(GlobalContext);
    return(
            <List movies={movies}/>
    )
}
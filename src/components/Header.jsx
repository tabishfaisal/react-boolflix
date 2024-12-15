import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";

export default function Header() {
    const { query, SetQuery, FetchData} = useContext(GlobalContext);

    function onChange(e) {
        SetQuery(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault()
        FetchData()
    }
    return (
        <header className="header">
            <h1>BoolFlix</h1>
            <form onSubmit={onSubmit} className="form">
                <input type="text" onChange={onChange} value={query} />
                <input type="submit" value="Search" />
            </form>
        </header>
    )
}
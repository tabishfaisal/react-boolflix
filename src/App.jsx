import { useState } from "react";
import axios from "axios";
import Main from "./components/Main";
import Header from "./components/Header";
import GlobalContext from "./components/context/GlobalContext";
function App() {
  const [movies, SetMovies] = useState([]);
  const [query, SetQuery] = useState('');

  function FetchData() {

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '7bafc08fe8f7b050c388482fd1944745',
          query : query,
        }
      })
        .then((res) => SetMovies(res.data.results))
        .catch((error) => console.error(error))
  }

  return (
    <>
      <GlobalContext.Provider value={{ movies, query, SetQuery ,FetchData}}>
        <Header />
        <Main />
      </GlobalContext.Provider>
    </>
  )
}

export default App
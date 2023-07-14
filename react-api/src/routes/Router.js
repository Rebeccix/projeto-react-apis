import { Routes, Route} from "react-router-dom"
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage'
import PokemonsListPage from '../Pages/PokemonsListPage/PokemonsListPage' 
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const Router = () => {

    return(
            <Routes>
                <Route index element={<PokemonsListPage/>}/>
                <Route path="/pokeDetail/:poke" element={<PokemonDetailPage/>}/>
                <Route path="/pokeList" element={<PokedexPage/>}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
    )
}

export default Router
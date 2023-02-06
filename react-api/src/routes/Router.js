import { Routes, Route} from "react-router-dom"
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage'
import PokemonsListPage from '../Pages/PokemonsListPage/PokemonsListPage' 

const Router = () => {

    return(
        // <BrowserRouter>
            <Routes>
                <Route index element={<PokedexPage/>}/>
                <Route path="/pokeDetail/:poke" element={<PokemonDetailPage/>}/>
                <Route path="/pokeList" element={<PokemonsListPage/>}/>
            </Routes>
        // </BrowserRouter>
    )
}

export default Router
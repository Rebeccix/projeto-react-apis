import { GlobalContext } from "./GlobalContext";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedexPoke, setPokedexPoke] = useState([]);
  const [foundPoke, setFoundPoke] = useState([]);
  const [param, setParam] = useState('')

  useEffect(() => {
    if (pokemons.length === 0) {
        getPokeDetails()
    }
  }, []);

  const getPokeDetails = () => {
    let poke = [];
    for (let id = 1; id <= 20; id++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => poke.push(res.data))
        .catch((err) => console.log(err));
    }
    setPokemons(poke)
  };

  const addToPokedex = (poke) => {
    setPokemons(pokemons.filter(pokemonId => poke.id !== pokemonId.id))
    setPokedexPoke([...pokedexPoke, poke])
  };

  const removePokemon = (poke) => {
    setPokemons([...pokemons, poke])
    setPokedexPoke(pokedexPoke.filter(pokemonId => poke.id !== pokemonId.id))
  };

  const findPoke = (pokeParam) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeParam}/`)
      .then((res) => setParam(res.data))
      .catch((err) => console.log(err))

    setFoundPoke(pokedexPoke.filter((poke) => poke.name === pokeParam))
  }

  const data = {
    pokemons,
    pokedexPoke,
    addToPokedex,
    removePokemon,
    findPoke,
    foundPoke,
    param
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
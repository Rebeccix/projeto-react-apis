import { GlobalContext } from "./GlobalContext";
import { useState, useEffect } from "react";
import { findPokemons, getPokemons } from "../services/apiRequest";
import grass from "../public/grass.svg"
import fire from "../public/fire.svg"
import steel from "../public/steel.svg"
import rock from "../public/rock.svg"
import psychic from "../public/psychic.svg"
import poison from "../public/poison.svg"
import normal from "../public/normal.svg"
import ground from "../public/ground.svg"
import ice from "../public/ice.svg"
import ghost from "../public/ghost.svg"
import flying from "../public/flying.svg"
import fighting from "../public/fighting.svg"
import fairy from "../public/fairy.svg"
import electric from "../public/electric.svg"
import dragon from "../public/dragon.svg"
import dark from "../public/dark.svg"
import bug from "../public/bug.svg"
import water from "../public/water.svg"

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedexPoke, setPokedexPoke] = useState([]);
  const [foundPoke, setFoundPoke] = useState([]);
  const [param, setParam] = useState('')
  const [AlertPopUp, setAlertPopUp] = useState(0)
  const types = [grass, fire, water, poison , bug, dark, dragon, electric, fairy, fighting, flying, ghost, ice, normal, ground, psychic, rock, steel ]
  
  useEffect(() => {
    getPokeDetails()
  }, []);

  const getPokeDetails = async () => {
      const data = await getPokemons();
      pokemons.length === 0 && setPokemons(data)
    }

  const addToPokedex = (poke) => {
    setPokemons(pokemons.filter(pokemonId => poke.id !== pokemonId.id))
    setPokedexPoke([...pokedexPoke, poke])
    setAlertPopUp([1, 'add'])
  };

  const removePokemon = (poke) => {
    setPokemons([...pokemons, poke])
    setPokedexPoke(pokedexPoke.filter(pokemonId => poke.id !== pokemonId.id))
    setAlertPopUp([1, 'remove'])
  };

  const findPoke = async (pokeParam) => {
    try {
      const data = await findPokemons(pokeParam)
      setFoundPoke(pokedexPoke.filter((poke) => poke.name === data.name))
      setParam(data)
      
    } catch (error) {
      console.log(error);
    }
  }
 
  const typePoke = (type) => {
      switch (type) {
        case "grass":
          return <img src={types[0]} alt=""/>;
        case "fire":
        return <img src={types[1]} alt=""/>;
        case "water":
        return <img src={types[2]} alt=""/>;
        case "poison":
        return <img src={types[3]} alt=""/>;
        case "bug":
        return <img src={types[4]} alt=""/>;
        case "dark":
        return <img src={types[5]} alt=""/>;
        case "dragon":
        return <img src={types[6]} alt=""/>;
        case "electric":
        return <img src={types[7]} alt=""/>;
        case "fairy":
        return <img src={types[8]} alt=""/>;
        case "fighting":
        return <img src={types[9]} alt=""/>;
        case "flying":
        return <img src={types[10]} alt=""/>;
        case "ghost":
        return <img src={types[11]} alt=""/>;
        case "ice":
        return <img src={types[12]} alt=""/>;
        case "normal":
        return <img src={types[13]} alt=""/>;
        case "ground":
        return <img src={types[14]} alt=""/>;
        case "psychic":
        return <img src={types[15]} alt=""/>;
        case "rock":
        return <img src={types[16]} alt=""/>;
        case "steel":
        return <img src={types[17]} alt=""/>;
        default:
          return null;
      }
  }

  const popUp = () => {
    setAlertPopUp(0)
  }

  const data = {
    pokemons,
    pokedexPoke,
    addToPokedex,
    removePokemon,
    findPoke,
    foundPoke,
    param,
    typePoke,
    AlertPopUp,
    popUp
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
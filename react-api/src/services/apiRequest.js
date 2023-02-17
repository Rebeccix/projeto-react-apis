import api from "../config/api";

export const getPokemons = async () => {
    let pokemonList = []
  for (let id = 1; id <= 150; id++) {
    try {
      const { data } = await api.get(`/${id}`);
      pokemonList.push(data);
    } catch (error) {
      throw new Error(error);
    }
  }
  return pokemonList
};

export const findPokemons = async (pokeParam) => {
  try {
    const { data } = await api.get(`/${pokeParam}`)
    return data
  } catch (error) {
    throw new Error(error);
  }
}

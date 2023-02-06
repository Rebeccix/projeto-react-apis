export const goToPokedex = (navigate) => {
    navigate("/")
}

export const goToDetail = (navigate, poke) => {
    navigate(`/pokeDetail/${poke}`)
}

export const goToPokelist = (navigate) => {
    navigate("/pokeList")
}
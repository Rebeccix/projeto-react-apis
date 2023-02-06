import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokelist } from "../../routes/coordinator";
import pokelogo from "../../public/pokelogo.svg";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button, Image, Flex, Spacer } from "@chakra-ui/react";

const Hearders = () => {
  const href = window.location.href;
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { foundPoke, addToPokedex, removePokemon, param } = context;

  return (
    <Flex p='0 41px 0 41px' h='160px' justify='space-between' align='center'>
      {href !== "http://localhost:3000/pokeList" ? (
        <button onClick={() => goToPokelist(navigate)}>Todos Pokémons</button>
      ): <Spacer />}
        <Spacer />
      <Image w='307px' h='113px' src={pokelogo}/>
      <Spacer />
      {href === "http://localhost:3000/pokeList" && (
        <Button colorScheme='twitter' w='287px' h='74px' fontSize='24px' onClick={() => goToPokedex(navigate)}>Pokedex</Button>
      )}
      {foundPoke.length === 0 &&
        href.includes("http://localhost:3000/pokeDetail") && (
          <Button onClick={() => addToPokedex(param)}>Adicionar</Button>
        )}
      {foundPoke.length !== 0 &&
        href.includes("http://localhost:3000/pokeDetail") && (
          <Button onClick={() => removePokemon(foundPoke[0])}>excluir</Button>
        )}
    </Flex>
  );
};

export default Hearders;

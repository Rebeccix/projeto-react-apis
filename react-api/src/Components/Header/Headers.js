import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokelist } from "../../routes/coordinator";
import pokelogo from "../../public/pokelogo.svg";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button, Image, Flex, Spacer, Text } from "@chakra-ui/react";
import Alert from "../Alert/Alert";

const Hearders = () => {
  const href = window.location.href;
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { AlertPopUp , foundPoke, addToPokedex, removePokemon, param } = context;


  return (
    <Flex p="0 41px 0 41px" h="160px" justify="space-between" align="center">
      {href !== "http://localhost:3000/" ? (
        <Text w="12.5rem" as="u" fontWeight="700" onClick={() => goToPokedex(navigate)}>
          Todos Pokémons
        </Text>
      ) : (
        <Spacer/>
      )}
      {href.includes('http://localhost:3000/pokeDetail') && <Spacer/>}
      <Spacer />
      <Image w="19.25rem" h="113px" src={pokelogo} />
      <Spacer />
      {href === "http://localhost:3000/"  ? (
        <Button
          colorScheme="twitter"
          w="18rem"
          h="74px"
          fontSize="24px"
          onClick={() => goToPokelist(navigate)}
        >
          Pokedex
        </Button>
      ) : ( <>
      <Spacer /></>)}
      {foundPoke.length === 0 &&
        href.includes("http://localhost:3000/pokeDetail") && (
          <Button w="16.1rem" onClick={() => addToPokedex(param)}>Adicionar</Button>
        )}
      {foundPoke.length !== 0 &&
        href.includes("http://localhost:3000/pokeDetail") && (
          <Button w="16.1rem" onClick={() => removePokemon(foundPoke[0])}>excluir</Button>
        )}
         {AlertPopUp[0] === 1 && 
      <Alert AlertPopUp={AlertPopUp}/>
      }
    </Flex>
  );
};

export default Hearders;

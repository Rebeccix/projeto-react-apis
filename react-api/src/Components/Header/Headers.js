import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokelist } from "../../routes/coordinator";
import pokelogo from "../../public/pokelogo.svg";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button, Image, Flex, Spacer, Text } from "@chakra-ui/react";
import Alert from "../Alert/Alert";
import { useState } from "react";
import { useEffect } from "react";

const Hearders = () => {
  const href = window.location.href;
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { AlertPopUp , foundPoke, addToPokedex, removePokemon, param } = context;

  const [check, setCheck] = useState(0);

  useEffect(() => {
    href.includes("pokeList") ? setCheck(1) : setCheck(0)
    href.includes("pokeDetail") && setCheck(1)
  }, [href]);

  return (
    <Flex p="0 41px 0 41px" h="160px" justify="space-between" align="center">
      {check === 1 ? (
        <Text w="12.5rem" as="u" fontWeight="700" onClick={() => goToPokedex(navigate)}>
          Todos Pokémons
        </Text>
      ) : (
        <Spacer/>
      )}
      {href.includes("pokeDetail") && <Spacer/>}
      <Spacer />
      <Image w="19.25rem" h="113px" src={pokelogo} />
      <Spacer />
      {check === 0  ? (
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
        href.includes("pokeDetail") && (
          <Button w="16.1rem" onClick={() => addToPokedex(param)}>Adicionar</Button>
        )}
      {foundPoke.length !== 0 &&
        href.includes("pokeDetail") && (
          <Button w="16.1rem" onClick={() => removePokemon(foundPoke[0])}>excluir</Button>
        )}
         {AlertPopUp[0] === 1 && 
      <Alert AlertPopUp={AlertPopUp}/>
      }
    </Flex>
  );
};

export default Hearders;

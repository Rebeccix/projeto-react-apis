import {
  SimpleGrid,
  Flex,
  Button,
  Image,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../routes/coordinator";
import Alert from "../Alert/Alert";
import bg from "../../public/bgPoke.svg";

const PokeCard = () => {
  const context = useContext(GlobalContext);

  const {
    AlertPopUp,
    pokemons,
    pokedexPoke,
    addToPokedex,
    removePokemon,
    typePoke,
  } = context;

  const navigate = useNavigate();

  let pokemonArray = [];
  window.location.href.includes("pokeList")
    ? (pokemonArray = pokedexPoke)
    : (pokemonArray = pokemons);
    console.log(pokemonArray)

  const colorChange = (value) => {
    let color = "";
    let type = value[0].type.name;
    switch (true) {
      case type === "grass":
        return (color = "#729F92");
      case type === "fire":
        return (color = "#EAAB7D");
      case type === "water":
        return (color = "#71C3FF");
      case type === "bug":
        return (color = "#76A866");
      case type === "poison":
        return (color = "#aa6bc8");
      case type === "electric":
        return (color = "#f4d344");
      case type === "fighting":
        return (color = "#ce416b");
      case type === "psychic":
        return (color = "#fa7179");
      case type === "rock":
        return (color = "#c5b78c");
      case type === "ground":
        return (color = "#d97845");
      case type === "ice":
        return (color = "#73cec0");
        case type === "dragon":
        return (color = "#39857b");
      case type === "ghost":
        return (color = "#5269ad");
        case type === "dark":
        return (color = "#77737e");
      default:
        return (color = "#BF9762");
    }
  };

  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {pokemonArray
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((poke) => {
            return (
              <Box
                pos="relative"
                borderRadius="12px"
                bg={colorChange(poke.types)}
                backgroundImage={bg}
                bgSize="210.73px"
                backgroundRepeat="no-repeat"
                backgroundPosition="right"
                key={poke.id}
                p="25px 22px 13px 22px"
                maxW="400px"
                h="210px"
              >
                <Flex justify="space-between">
                  <Box mb="30px">
                    {poke.id > 10 ? (
                      <Text fonts="Inter" fontWeight="700" color="#ffffff">
                        #{poke.id}
                      </Text>
                    ) : (
                      <Text fontWeight="700" fonts="Inter" color="#ffffff">
                        #0{poke.id}
                      </Text>
                    )}
                    <Text
                      fontSize="32px"
                      fontWeight="700"
                      fonts="Inter"
                      color="#ffffff"
                    >
                      {poke.name}
                    </Text>
                    <Flex>
                      {poke.types.map((typeArr) => (
                        <Box key={typeArr.slot}>
                          {typePoke(typeArr.type.name)}
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                  <Box pos="absolute" bottom="30%" left="52%">
                    <Image
                      boxSize="193px"
                      src={poke.sprites.other["official-artwork"].front_default}
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Text
                    color="white"
                    as="u"
                    aling="center"
                    justify="center"
                    fonts="Poppins"
                    fontWeight="700"
                    variant="ghost"
                    colorScheme="white"
                    onClick={() => goToDetail(navigate, poke.name)}
                  >
                    Detalhes
                  </Text>
                  {window.location.href.includes("pokeList") ? (
                    <Button
                      w="146px"
                      h="38px"
                      fonts="Poppins"
                      fontWeight="400"
                      variant="solid"
                      color="white"
                      bg="#FF6262"
                      onClick={() => removePokemon(poke)}
                    >
                      Remover
                    </Button>
                  ) : (
                    <Button
                      w="146px"
                      h="38px"
                      fonts="Poppins"
                      fontWeight="400"
                      variant="solid"
                      color="black"
                      bg="white"
                      onClick={() => addToPokedex(poke)}
                    >
                      Capturar!
                    </Button>
                  )}
                </Flex>
              </Box>
            );
          })}
      </SimpleGrid>
      {AlertPopUp[0] === 1 && <Alert />}
    </>
  );
};

export default PokeCard;

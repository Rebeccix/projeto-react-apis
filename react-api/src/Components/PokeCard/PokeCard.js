import {
  SimpleGrid,
  Flex,
  Button,
  Image,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../routes/coordinator";

const PokeCard = () => {
  const context = useContext(GlobalContext);

  const { pokemons, pokedexPoke, addToPokedex, removePokemon } = context;

  const navigate = useNavigate();

  let pokemonArray = [];
  window.location.href.includes("pokeList")
    ? (pokemonArray = pokemons)
    : (pokemonArray = pokedexPoke);

  return (
    <SimpleGrid minChildWidth='300px' spacing="40px">
      {pokemonArray
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((poke) => {
          return (
            <Box borderRadius='12px' bg="tomato" key={poke.id} p='25px 22px 13px 22px'>
              <Flex justify="space-between">
                <Box>
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
                      <Box key={typeArr.slot}>{typeArr.type.name}</Box>
                    ))}
                  </Flex>
                </Box>
                <Box>
                  <Image
                    boxSize="198px"
                    src={poke.sprites.front_default}
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
                    color="black"
                    bg="white"
                    onClick={() => addToPokedex(poke)}
                  >
                    Capturar!
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    colorScheme="black"
                    onClick={() => removePokemon(poke)}
                  >
                    Remover
                  </Button>
                )}
              </Flex>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default PokeCard;

// <Grid
//   key={poke.id}
//   bg="blue.300"
//   p="25px 22px 20px 23px"
//   w="440px"
//   h="210px"
//   templateRows="repeat(2, 1fr)"
//   templateColumns="repeat(2, 1fr)"
// >
//   <GridItem rowSpan={1} colSpan={1}>
//     {poke.id > 10 ? <Text fonts='Inter' fontWeight='700' color='#ffffff'>#{poke.id}</Text > : <Text fontWeight='700' fonts='Inter' color='#ffffff'>#0{poke.id}</Text>}
//     <Text fontSize='32px' fontWeight='700' fonts='Inter' color='#ffffff'>{poke.name}</Text>
//     <Flex>
//     {poke.types.map((typeArr) => (
//       <Box key={typeArr.slot}>{typeArr.type.name}</Box>
//       ))}
//     </Flex>
//   </GridItem>
//   <GridItem position="relative" colSpan={1}>
//     <Image position="absolute" bottom='-10' left='5' boxSize="198px" src={poke.sprites.front_default} alt="" />
//   </GridItem>
//   <GridItem colSpan={1} rowSpan={1} pt="50px">

//   </GridItem>
//   <GridItem colSpan={1} rowSpan={1} aling="right" pt="40px">
//     <Flex justify="flex-end">

//   }
//     </Flex>
//   </GridItem>
// </Grid>

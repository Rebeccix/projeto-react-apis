import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Progress,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import bg from "../../public/bgPoke.svg";

const PokemonDetailPage = () => {
  // const { state } = useLocation();
  // console.log(state.poke);
  const [pokeDetails, setPokeDetails] = useState([]);

  const { poke } = useParams();

  const context = useContext(GlobalContext);

  const { findPoke, typePoke } = context;

  useEffect(() => {
    findPoke(poke);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
      .then((res) => setPokeDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  function renderSwitch(param) {
    switch (param) {
      case "special-attack":
        return "Sp.Atk";
      case "special-defense":
        return "Sp.Def";
      default:
        return param;
    }
  }

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
    <Box minH="66.7vh" bg="#5E5E5E" p="60px 25.86px 163px 25px">
      <Heading m="0 0 56px 0">Detalhes</Heading>
      {pokeDetails.length === 0 ? (
        <></>
      ) : (
        <Grid
          bg={colorChange(pokeDetails.types)}
          backgroundImage={bg}
          backgroundRepeat="no-repeat"
          backgroundPosition="right"
          borderRadius="12px"
          p="26px 0 26px 44px"
          h="663px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 22% 29% 23% 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Flex
              h="613px"
              direction="column"
              align="center"
              justify="space-between"
            >
              <Image
                borderRadius="12px"
                w="17.6rem"
                bg="white"
                src={pokeDetails.sprites.front_default}
                alt=""
              />
              <Image
                borderRadius="12px"
                w="17.6rem"
                bg="white"
                src={pokeDetails.sprites.back_default}
                alt=""
              />
            </Flex>
          </GridItem>
          <GridItem
            borderRadius="12px"
            p="19px 18px 0 18px"
            m="0 68px 0 0"
            rowSpan={1}
            colSpan={1}
            h="613px"
            bg="white"
          >
            <Heading mb="10px">Base Stats</Heading>
            {pokeDetails.stats.map((stat) => (
              <Flex key={stat.stat.name} mb="5px" align="center">
                <Box w="60px">
                  <Text fontSize="xs" align="right">
                    {renderSwitch(stat.stat.name)}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs" as="b" m="0 15px 0 15px">
                    {stat.base_stat}
                  </Text>
                </Box>
                <Box flex="1">
                  <Progress
                    bg=""
                    borderRadius="12px"
                    colorScheme="orange"
                    value={stat.base_stat}
                  />
                </Box>
              </Flex>
            ))}
            <Flex align="center">
              <Box>
                <Text w="60px" fontSize="xs" mr="10px" align="right">
                  Total
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" as="b">
                  {Object.values(pokeDetails.stats).reduce(
                    (r, { base_stat }) => r + base_stat,
                    0
                  )}
                </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} borderRadius="12px" h="613px" bg="">
            <Box mb="46px">
              {pokeDetails.id > 10 ? (
                <Text fonts="Inter" fontWeight="700" color="#ffffff">
                  #{pokeDetails.id}
                </Text>
              ) : (
                <Text fontWeight="700" fonts="Inter" color="#ffffff">
                  #0{pokeDetails.id}
                </Text>
              )}
              <Text
                fontSize="32px"
                fontWeight="700"
                fonts="Inter"
                color="#ffffff"
                mb="10px"
              >
                {pokeDetails.name}
              </Text>
              <Flex>
                {pokeDetails.types.map((typeArr) => (
                  <Box key={typeArr.slot} mr="18px">
                    {typePoke(typeArr.type.name)}
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box borderRadius="12px" bg="white" h="453px" p="18px 0 0 18px">
              <Heading>Moves:</Heading>
              <Text
                pt="6px"
                align="center"
                fontSize="14px"
                fonts="Montserrat"
                fontWeight="400"
                m="20px 0 0 0"
                bg="#ECECEC"
                borderRadius="12px"
                w="102px"
                h="37px"
              >
                {pokeDetails.moves[0].move.name}
              </Text>
              <Text
                pt="6px"
                align="center"
                fontSize="14px"
                fonts="Montserrat"
                fontWeight="400"
                m="20px 0 0 0"
                bg="#ECECEC"
                borderRadius="12px"
                w="102px"
                h="37px"
              >
                {pokeDetails.moves[1].move.name}
              </Text>
              <Text
                pt="6px"
                align="center"
                fontSize="14px"
                fonts="Montserrat"
                fontWeight="400"
                m="20px 0 0 0"
                bg="#ECECEC"
                borderRadius="12px"
                w="102px"
                h="37px"
              >
                {pokeDetails.moves[2].move.name}
              </Text>
              <Text
                pt="6px"
                align="center"
                fontSize="14px"
                fonts="Montserrat"
                fontWeight="400"
                m="20px 0 0 0"
                bg="#ECECEC"
                borderRadius="12px"
                w="102px"
                h="37px"
              >
                {pokeDetails.moves[3].move.name}
              </Text>
            </Box>
          </GridItem>
          <GridItem pos="relative" w="270px" rowSpan={1} colSpan={1} h="270px" bg="">
            <Image
              pos="absolute"
              bottom="150px"
              boxSize="100%"
              src={pokeDetails.sprites.other["official-artwork"].front_default}
            />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default PokemonDetailPage;

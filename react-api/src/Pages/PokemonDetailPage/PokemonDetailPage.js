import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Grid, GridItem, Image, Text, Progress, Flex, Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";

const PokemonDetailPage = () => {
  // const { state } = useLocation();
  // console.log(state.poke);
  const [pokeDetails, setPokeDetails] = useState([]);

  const { poke } = useParams();

  const context = useContext(GlobalContext)

  const { findPoke } = context;

  useEffect(() => {
    findPoke(poke)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
      .then((res) => setPokeDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  function renderSwitch(param){
    switch(param) {
      case 'special-attack':
        return 'Sp.Atk';
        case 'special-defense':
        return 'Sp.Def';
      default:
        return param;
    }
  }

  return (
    <Box bg='#5E5E5E' p='60px 25.86px 163px 25px'>
      <Heading m='0 0 56px 15px'>PokemonDetailPage</Heading>
      {pokeDetails.length === 0 ? (
        <></>
      ) : (
        <Grid
          h="663px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1} w='282px' h='613px'  bg="tomato">
            <Image bg="white" src={pokeDetails.sprites.front_default} alt="" />
            <Image bg="white" src={pokeDetails.sprites.back_default} alt="" />
          </GridItem>
          <GridItem p='10px' rowSpan={1} colSpan={1} w='343px' h='613px' bg="papayawhip">
            <Heading>Base Stats</Heading>
            {pokeDetails.stats.map((stat) => (
                <Flex key={stat.stat.name} align='center'>
                <Box w='60px'>
                  <Text fontSize="xs" align='right'>
                  {renderSwitch(stat.stat.name)}
                    </Text>
                </Box>
                <Box>
                <Text fontSize="xs">{stat.base_stat}</Text>
                </Box>
                <Box flex='1'>
                    <Progress value={stat.base_stat} />
                </Box>
              </Flex>
            ))}
            <Flex>
                <Box>
                <Text w='60px' fontSize="xs" align='right'>Total</Text>
                </Box>
                <Box>
                <Text fontSize="xs">{Object.values(pokeDetails.stats).reduce((r, { base_stat }) => r + base_stat, 0)}</Text>
                </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} w='343px' h='613px' bg="blue">
                <Text fontSize='xs'>#{pokeDetails.id}</Text>
                <Heading>{pokeDetails.name}</Heading>
                {pokeDetails.types.map((typeArr) => (
                <span key={typeArr.slot}>{typeArr.type.name}</span>
                ))}
                <Box>
                    <Heading>
                        Moves:
                    </Heading>
                    <Text>{pokeDetails.moves[0].move.name}</Text>
                    <Text>{pokeDetails.moves[1].move.name}</Text>
                    <Text>{pokeDetails.moves[2].move.name}</Text>
                    <Text>{pokeDetails.moves[3].move.name}</Text>
                </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} h='613px' bg="black">
            <Image pos="absolute" top='216px' left='1109px' boxSize='270px' src={pokeDetails.sprites.front_default}/>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default PokemonDetailPage;
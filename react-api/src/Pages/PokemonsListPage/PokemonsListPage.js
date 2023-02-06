import PokeCard from "../../Components/PokeCard/PokeCard";
import { Heading, Box } from "@chakra-ui/react";

const PokemonsListPage = () => {
  return (
    <Box bg='#5E5E5E' p='60px 40px 163px 40px'>
      <Heading color='#FFFFFF' fontSize='48px' m='0 0 56px 15px'>Todos pokémons</Heading>
      <PokeCard />
    </Box>
  );
};

export default PokemonsListPage;

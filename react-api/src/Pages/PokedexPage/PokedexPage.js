import { Heading, Box } from "@chakra-ui/react";
import PokeCard from "../../Components/PokeCard/PokeCard";

const PokedexPage = () => {
  return (
    <Box bg='#5E5E5E' p="60px 25.86px 163px 25px">
      <Heading color='#FFFFFF' fontSize='48px' m='0 0 56px 15px'>Meus Pokémons</Heading>
      <PokeCard />
    </Box>
  );
};

export default PokedexPage;

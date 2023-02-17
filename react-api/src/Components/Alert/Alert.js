import { Heading, Text } from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import AlertBox from "./styles";
import { useEffect, useRef } from "react";

const Alert = () => {
  const context = useContext(GlobalContext);

  const { popUp, AlertPopUp } = context;

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
  }, [])
  
  const refOne = useRef(null)

  const handleClickOutside = (e) => {
    if(!refOne.current.contains(e.target)) {
      popUp()
    } else {
      return 
    }
  }

  return (
    <AlertBox>
      <div ref={refOne}>
        {AlertPopUp[1] === 'remove' ? (
          <>
            <Heading fontSize="48px" fonts="Poppins" fontWeight="700">
              Oh, no!
            </Heading>
            <Text fontSize="16px" fonts="Poppins" fontWeight="700">
              {" "}
              o Pokémon foi removido da sua Pokédex
            </Text>
          </>
        ) : (
          <>
            <Heading fontSize="48px" fonts="Poppins" fontWeight="700">
              Gotcha!
            </Heading>
            <Text fontSize="16px" fonts="Poppins" fontWeight="700">
              {" "}
              o Pokémon foi adicionado a sua Pokédex
            </Text>
          </>
        )}
      </div>
    </AlertBox>
  );
};

export default Alert;

import Router from "./routes/Router";
import Hearders from "./Components/Header/Headers";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <ChakraProvider>
          <Hearders />
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

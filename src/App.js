import { Box } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import DetailView from "./Components/ItemDetails/DetailView";
import NotFound from "./Components/NotFound";
import ContextProvider from "./context/ContextProvider";
import TemplateProvider from "./templates/TemplateProvider";
import CounterState from "./context/CounterContex";
function App() {
  return (
    <TemplateProvider>
      <CounterState>
        <ContextProvider>
          <BrowserRouter>
            <Header />
            <Box style={{ marginTop: 54 }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/product/:id" component={DetailView} />
                <Route component={NotFound} />
              </Switch>
            </Box>
          </BrowserRouter>
        </ContextProvider>
      </CounterState>
    </TemplateProvider>
  );
}

export default App;

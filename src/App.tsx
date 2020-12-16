import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "./pages/HomePage/HomePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import FoodItemPage from "./pages/FoodItemPage/FoodItemPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";

// core components for this product
import NavBar from "./components/common/Navbar";
import Parallax from "./components/common/Parallax";

function App() {
  return (
    <ChakraProvider>
      <Parallax />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/orders" component={OrdersPage} />
          <Route path="/customers" component={CustomersPage} />
          <Route path="/food-items" component={FoodItemPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

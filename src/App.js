import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopBar from "./LuxeLane/TopBar";
import Header from "./LuxeLane/Header";
import Routing from "./LuxeLane/Routing";
import Footer from "./LuxeLane/Footer";
import "./LuxeLane/Style.css";
import "animate.css";
import { CartProvider } from "./LuxeLane/CartContext";

export const loginStatus = createContext();

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="App">
     
        <CartProvider>
          <loginStatus.Provider value={[token, setToken]}>
            <TopBar />
            <Header />
            <Routing />
            <Footer />
          </loginStatus.Provider>
        </CartProvider>
     
    </div>
  );
};

export default App;

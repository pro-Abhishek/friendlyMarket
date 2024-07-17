import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import About from "./About";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const App = () => {
  const theme = {
    colors: {
      heading: "",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#1B1E35",
      btn: "rgb(50, 44, 96)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132,144,255) 0% ,rgb(98,189,252) 100%",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/friendlyMarket" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/singleproduct/:id"
              element={<SingleProduct />}
            ></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

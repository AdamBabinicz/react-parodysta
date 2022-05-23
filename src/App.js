import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Slider from "./components/Slider";
import About from "./components/About";
// import Contact from "./components/Contact";
import Video from "./components/Video";
import Footer from "./components/Footer";
import NavbarMobile from "./components/NavbarMobile";
import ScrollToTop from "./components/ScrollToTop";
// import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavbarMobile />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/banner" component={Banner} />
        <Route path="/services" component={Services} />
        <Route path="/slider" component={Slider} />
        <Route path="/video" component={Video} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
// e.preventDefault();
export default App;

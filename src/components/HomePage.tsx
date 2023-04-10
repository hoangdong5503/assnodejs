import React from "react";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import AboutPage from "./Layout/About";
import Contact from "./Layout/Contact";
import Footer from "./Layout/Footer";
import Products from "./Layout/Products";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutPage />
      <Products/>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

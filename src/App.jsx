import { useState } from "react";
import TimeShare from "./Components/TimeShare";
import MenuBar from "./Components/MenuBar";
import LatestSection from "./Components/LatestAiringCard";
import BlockTitle from "./Components/BlockTitle";
import Cards from "./Components/Cards";
import CardsBottom from "./Components/BottomCards";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <header>
    <TimeShare/>
    </header>
      <main
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#28282a",
          overflowX: "hidden",
          overflow:"hidden",
        }}
      >
        <MenuBar/>
        <LatestSection />
        <BlockTitle/>
        <Cards/>
        <CardsBottom/>
        <Footer/>
      </main>
    </>
  );
};

export default App;

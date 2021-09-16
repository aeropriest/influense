import "./App.css";
import React from "react";
import CelebritiesContextProvider from "./context/celebrities.context";
import HeroImageBackground from "./components/hero.image.background/hero.image.background.component";
import CelebrityImageList from "./components/celebrity.gallery.list/celebrity.gallery.list.component";
import CurentCelebrityProvider from "./context/current.celebrity.context";
function App() {
  return (
    <div className="App">
      <CelebritiesContextProvider>
        <CurentCelebrityProvider>
          <HeroImageBackground />
          <CelebrityImageList />
        </CurentCelebrityProvider>
      </CelebritiesContextProvider>
    </div>
  );
}

export default App;

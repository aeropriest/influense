import "./App.css";
import React from "react";
import HeroImageBackground from "./components/hero.image.background/hero.image.background.component";
import CelebrityImageList from "./components/celebrity.images.list/celebrity.images.list";
import CurentCelebrityProvider from "./context/current.celebrity.context";
function App() {
  return (
    <div className="App">
      <CurentCelebrityProvider>
        <HeroImageBackground />
        <CelebrityImageList />
      </CurentCelebrityProvider>
    </div>
  );
}

export default App;

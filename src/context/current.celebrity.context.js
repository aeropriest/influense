import { Component, createContext } from "react";
export const CurentCelebrityContext = createContext();

class CurentCelebrityContextProvider extends Component {
  state = {
    currentCelebrity: "",
    currentImage: "",
  };

  setCurrentCelebrityImage = (image) => {
    console.log("setCurrentCelebrityImage", image);
  };
  setCurrentCelebrityHandle = (handle) => {
    console.log("setCurrentCelebrityHandle", handle);
    this.setState({ currentCelebrity: handle });
  };
  render() {
    return (
      <CurentCelebrityContext.Provider
        value={{
          ...this.state,
          setCurrentCelebrityHandle: this.setCurrentCelebrityHandle,
          setCurrentCelebrityImage: this.setCurrentCelebrityImage,
        }}
      >
        {this.props.children}
      </CurentCelebrityContext.Provider>
    );
  }
}

export default CurentCelebrityContextProvider;

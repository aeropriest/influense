import React, { Component, createContext } from "react";
import firebaseContext from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    selectedCelebrity: {},
    celebrities: [],
  };

  componentDidMount() {
    console.log("-------component has mounted---------");
    firebaseContext
      .collection("influensers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          const celebrity = {
            handle: data.handle,
            name: data.name,
            followers: data.follwers,
            profileImg: data.profileImg,
          };
          this.setState({ selectedCelebrity: celebrity });
          this.state.celebrities.push(celebrity);
        });
      });
    console.log(this.state.celebrities);
  }

  setSelectedCelebrity = (celebrity) => {
    this.setState({ selectedCelebrity: celebrity });
  };
  render() {
    return (
      <CelebritiesContext.Provider
        value={{
          ...this.state,
          setSelectedCelebrity: this.setSelectedCelebrity,
        }}
      >
        {this.props.children}
      </CelebritiesContext.Provider>
    );
  }
}

export default CelebritiesContextProvider;

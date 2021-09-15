import React, { Component, createContext } from "react";
import firebaseContext from "../firebase.context/firebase.context";
import { useState } from "react";
export const SelectedCelebrityContext = createContext();

class SelectedCelebrityContextProvider extends Component {
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
            followers: data.followers,
            posterUrl: data.profukeImg,
          };
          this.setState({ selectedCelebrity: celebrity });
          this.state.celebrities.push(celebrity);
        });
      });
    console.log(this.state.celebrities);
  }

  setSelectedCelebrity = (celebrity) => {
    this.setState({ selectedCelebrity: celebrity });
    console.log("setSelectedCelebrity", this.state.selectedCelebrity);
  };
  render() {
    return (
      <SelectedCelebrityContext.Provider
        value={{
          ...this.state,
          setSelectedCelebrity: this.setSelectedCelebrity,
        }}
      >
        {this.props.children}
      </SelectedCelebrityContext.Provider>
    );
  }
}

export default SelectedCelebrityContextProvider;

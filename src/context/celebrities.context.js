import React, { Component, createContext } from "react";
import firebaseContext, { firebaseDatabaseName } from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    selectedCelebrityHandle: "",
    selectedCelebrity: {},
  };

  setSelectedCelebrityHandle = (celebrityHandle) => {
    let images = [];
    firebaseContext
      .collection(firebaseDatabaseName)
      .where("handle", "==", "jamesrodriguez10")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref
            .collection("gallery")
            .get()
            .then((gallarySnapshot) => {
              gallarySnapshot.forEach((image) => {
                images.push(image.data());
              });
            });
          const celebrity = {
            handle: doc.data().handle,
            name: doc.data().name,
            followers: doc.data().follwers,
            profileImg: doc.data().profileImg,
            id: doc.id,
            gallery: images,
          };
          this.setState({ currentCelebrity: celebrity });
          console.log(this.state.currentCelebrity);
        });
      });
  };

  componentDidMount() {
    this.setSelectedCelebrityHandle("jamesrodriguez10");
    console.log(this.state.currentCelebrity);
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
          setSelectedCelebrityHandle: this.setSelectedCelebrityHandle,
        }}
      >
        {this.props.children}
      </CelebritiesContext.Provider>
    );
  }
}

export default CelebritiesContextProvider;

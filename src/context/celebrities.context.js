import React, { Component, createContext } from "react";
import firebaseContext, { firebaseDatabaseName } from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    isCelebritySelected: false,
    selectedCelebrityHandle: "",
    selectedCelebrity: {},
    allCelebrities: [],
  };

  componentDidMount() {
    console.log("---- context componentDidMount---");
    //load the first celebrity in the database
    firebaseContext
      .collection(firebaseDatabaseName)
      .get()
      .then((celebritiesSnapshot) => {
        celebritiesSnapshot.forEach((celebrity) => {
          this.setState((prevState) => ({
            allCelebrities: [...prevState.allCelebrities, celebrity.data()],
          }));
          if (this.state.selectedCelebrityHandle === "") {
            this.setSelectedCelebrityHandle(celebrity.data().handle);
          }
        });
      });
  }

  setSelectedCelebrityHandle = async (celebrityHandle) => {
    console.log("-------- setSelectedCelebrityHandle ------------");
    this.setState({ selectedCelebrityHandle: celebrityHandle });
    //console.log(" setSelectedCelebrityHandle to  ", celebrityHandle);
    let images = [];
    await firebaseContext
      .collection(firebaseDatabaseName)
      .where("handle", "==", celebrityHandle)
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

          //better use something like this
          //this.setState({ currentCelebrity: doc.data() });
          //this.currentCelebrity.images = [...images, image.data()];

          const celebrity = {
            handle: doc.data().handle,
            name: doc.data().name,
            followers: doc.data().follwers,
            profileImg: doc.data().profileImg,
            id: doc.id,
            gallery: images,
          };
          this.setState({ isCelebritySelected: true });
          this.setState({ selectedCelebrity: celebrity });
          //console.log(this.state.selectedCelebrity);
        });
      });
  };

  setSelectedCelebrity = (celebrity) => {
    console.log("-------- setSelectedCelebrity  ------------");
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

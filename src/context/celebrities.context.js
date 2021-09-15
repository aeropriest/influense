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
        //allCelebrities = celebritiesSnapshot.celebritySnapshots()
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

  setSelectedCelebrityHandle = (celebrityHandle) => {
    let images = [];
    firebaseContext
      .collection(firebaseDatabaseName)
      .where("handle", "==", celebrityHandle)
      .get()
      .then((snapshot) => {
        snapshot.forEach((celebritySnapshot) => {
          celebritySnapshot.ref
            .collection("gallery")
            .get()
            .then((gallarySnapshot) => {
              gallarySnapshot.forEach((image) => {
                images.push(image.data());
              });

              const celebrity = {
                handle: celebritySnapshot.data().handle,
                name: celebritySnapshot.data().name,
                followers: celebritySnapshot.data().follwers,
                profileImg: celebritySnapshot.data().profileImg,
                id: celebritySnapshot.id,
                gallery: images,
              };
              this.setState(
                {
                  isCelebritySelected: true,
                  selectedCelebrity: celebrity,
                  selectedCelebrityHandle: celebrityHandle,
                },
                () => {
                  console.log("from celebrity contet");
                  console.log(this.state.selectedCelebrity);
                }
              );
            });

          //better use something like this
          //this.setState({ currentCelebrity: celebritySnapshot.data() });
          //this.currentCelebrity.images = [...images, image.data()];
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
          setSelectedCelebrityHandle: this.setSelectedCelebrityHandle,
        }}
      >
        {this.props.children}
      </CelebritiesContext.Provider>
    );
  }
}

export default CelebritiesContextProvider;

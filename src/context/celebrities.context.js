import React, { Component, createContext } from "react";
import firebaseContext from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    selectCelebrityHandle: "",
    selectedCelebrity: {},
    selectedCelebrityGallery: {},
    celebrities: {},
  };

  componentDidMount() {
    console.log(" celebrities context did mount");
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
          //          this.setState({ selectCelebrityHandle: celebrity.handle });
          //          this.setState({ selectedCelebrity: celebrity });
          this.state.celebrities.push(celebrity);
        });
      });
    console.log("number of celebrities loaded", this.state.celebrities.length);
    console.log(this.state.celebrities);
    this.state.celebrities.forEach((c) => {
      console.log(c);
    });
  }

  setSelectedCelebrityHandle = (celebrityHandle) => {
    firebaseContext
      .collection("influensers")
      .where("handle", "==", celebrityHandle)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const celebrity = {
            handle: doc.handle,
            name: doc.name,
            followers: doc.follwers,
            profileImg: doc.profileImg,
            id: doc.id,
            // wallet_addr: doc.wallet_addr,
            // wallet_key: doc.wallet_key,
          };
          this.setState.apply({ selectedCelebrity: celebrity });
          firebaseContext
            .collection("influensers")
            .doc(doc.id)
            .collection("gallery")
            .get()
            .then((images) => {
              images.forEach((image) => {
                const galleryImage = {
                  created_at: image.created_at,
                  highestBid: image.highestBid,
                  id: image.id,
                  imageUrl: image.imageUrl,
                  timeLeft: image.timeLeft,
                  nft_id: image.nft_id,
                };
                this.state.selectedCelebrityGallery.push(galleryImage);
              });
            });
        });
      });
    this.setState({ selectCelebrityHandle: celebrityHandle });
  };

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

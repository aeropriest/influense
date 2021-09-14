import React, { Component, createContext } from "react";
import firebaseContext from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    selectCelebrityHandle: "",
    selectedCelebrity: {},
    selectedCelebrityGallery: [],
    celebrities: [],
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
            id: data.id,
            created_at: data.created_at,
            handle: data.handle,
            name: data.name,
            followers: data.follwers,
            profileImg: data.profileImg,
          };
          //load first celebrity
          if (!this.state.celebrities.length) {
            this.setState({ selectedCelebrity: celebrity });
            console.log("loaded celebrity ", celebrity);

            firebaseContext
              .collection("influensers")
              .where("handle", "==", celebrity.handle)
              .get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                  console.log("loading gallery for ", doc.id);
                  firebaseContext
                    .collection("influensers")
                    .doc(doc.id)
                    .collection("gallery")
                    .get()
                    .then((images) => {
                      images.forEach((image) => {
                        const i = image.data();
                        const galleryImage = {
                          created_at: i.created_at,
                          highestBid: i.highestBid,
                          id: i.id,
                          imageUrl: i.imageUrl,
                          timeLeft: i.timeLeft,
                          nft_id: i.nft_id,
                        };
                        this.state.selectedCelebrityGallery.push(galleryImage);
                      });
                    });
                });
              });
          }

          this.state.celebrities.push(celebrity);
        });
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
          //this.setState.setSelectedCelebrity({ selectedCelebrity: celebrity });
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
        //console.log(this.state.selectedCelebrityGallery);
      });
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

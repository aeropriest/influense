import React, { Component, createContext } from "react";
import firebaseContext, { firebaseDatabaseName } from "./firebase.context";
export const CelebritiesContext = createContext();

class CelebritiesContextProvider extends Component {
  state = {
    selectedCelebrityImage: {},
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

  setSelectedCelebrityImage = (celebrityImage) => {
    const imageRecord = `${firebaseDatabaseName}/${this.state.selectedCelebrity.id}/gallery`;
    firebaseContext
      .collection(imageRecord)
      .where("id", "==", celebrityImage.id)
      .get()
      .then((data) => {
        data.forEach((d) => {
          console.log("record", d.data());
          this.setState({ selectedCelebrityImage: d.data() }, () => {
            console.log("imageset");
          });
        });
      });
  };

  setSelectedCelebrityHandle = (celebrityHandle) => {
    let images = [];
    let selectedImage = {};
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
                let img = {
                  firebaseId: image.id,
                  created_at: image.data().created_at,
                  highestBid: image.data().highestBid,
                  id: image.data().id,
                  imageUrl: image.data().imageUrl,
                  nft_id: image.data().nft_id,
                  timeLeft: image.data().timeLeft,
                };
                images.push(img);
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
                  selectedImage: images[0],
                },
                () => {
                  //console.log("from celebrity contet");
                  console.log(
                    "selected celebrity now is",
                    this.state.selectedCelebrity,
                    "selected image is ",
                    this.state.selectedImage
                  );
                }
              );
            });

          //better use something like this
          //this.setState({ currentCelebrity: celebritySnapshot.data() });
          //this.currentCelebrity.images = [...images, image.data()];
        });
      });
  };

  render() {
    return (
      <CelebritiesContext.Provider
        value={{
          ...this.state,
          setSelectedCelebrityHandle: this.setSelectedCelebrityHandle,
          setSelectedCelebrityImage: this.setSelectedCelebrityImage,
        }}
      >
        {this.props.children}
      </CelebritiesContext.Provider>
    );
  }
}

export default CelebritiesContextProvider;

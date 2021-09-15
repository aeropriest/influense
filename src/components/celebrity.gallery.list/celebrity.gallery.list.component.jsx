import firebaseContext, {
  firebaseDatabaseName,
} from "../../context/firebase.context";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as BidIcon } from "./../../assets/images/bid-icon.svg";
import { CelebritiesContext } from "../../context/celebrities.context";

import "./celebrity.gallery.list.styles.css";
import { ContactSupportOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black", //theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 5,
  },
}));

export default function CelebrityImageList() {
  //const [celebrity, setCelebrity] = useState({});

  const classes = useStyles();
  return (
    <CelebritiesContext.Consumer>
      {(context) => {
        console.log("----------load images for this celebrity");
        const { selectedCelebrityHandle } = context;
        console.log(selectedCelebrityHandle);

        let images = [];
        firebaseContext
          .collection(firebaseDatabaseName)
          .where("handle", "==", selectedCelebrityHandle)
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

              const c = {
                handle: doc.data().handle,
                name: doc.data().name,
                followers: doc.data().follwers,
                profileImg: doc.data().profileImg,
                id: doc.id,
                gallery: images,
              };
              //setCelebrity(c);
              //console.log(celebrity);
            });
          });

        return (
          <div className="imageListContainer">
            <div className={classes.root}>
              {/* <ImageList
                className={classes.imageList}
                cols={10}
                style={{
                  backgroundColor: "#00000055",
                  backdropFilter: "blur(3px)",
                }}
              >
                {celebrity.images.map((celebrityImage) => (
                  <ImageListItem key={celebrityImage.id}>
                    <img
                      src={`${celebrityImage.imageUrl}`}
                      srcSet={`${celebrityImage.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={celebrityImage.imageUrl}
                      loading="lazy"
                    />

                    <ImageListItemBar
                      style={{
                        backgroundColor: "#00000055",
                        height: "35px",
                        backdropFilter: "blur(3px)",
                      }}
                      subtitle={"@" + celebrity.handle}
                      actionIcon={
                        <IconButton
                          sx={{
                            color: "rgba(255, 0, 0, 0.94)",
                            width: "18px",
                          }}
                          aria-label={`info about ${celebrity.handle}`}
                        >
                          <BidIcon style={{ fill: "white", width: "18px" }} />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList> */}
            </div>
          </div>
        );
      }}
    </CelebritiesContext.Consumer>
  );
}

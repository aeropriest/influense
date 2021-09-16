import firebaseContext, {
  firebaseDatabaseName,
} from "../../context/firebase.context";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as BidIcon } from "./../../assets/images/bid-icon.svg";
import { CurentCelebrityContext } from "../../context/current.celebrity.context";

import "./celebrity.gallery.list.styles.css";

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

const CelebrityImageList = () => {
  console.log("CelebrityImageList 1");
  const [galleryImages2, setGalleryImages2] = useState([]);
  useEffect(() => {}, []);

  const classes = useStyles();

  return (
    <CurentCelebrityContext.Consumer>
      {(context) => {
        let galleryImages = [];
        console.log("CelebrityImageList 2", context.currentCelebrity);
        //this.setState({ galleryImages: [] });
        if (!galleryImages.length && context.currentCelebrity) {
          const imageRecord = `${firebaseDatabaseName}/${context.currentCelebrity}/gallery`;
          firebaseContext
            .collection(imageRecord)
            .get()
            .then((data) => {
              data.forEach((d) => {
                let i = d.data();
                i["firebase_id"] = d.id;
                galleryImages.push(i);
                console.log(i);
              });
              //this.setState({ galleryImages2: galleryImages });
            });
        }
        galleryImages.map((celebrityImage) => {
          console.log(celebrityImage);
        });
        return (
          <div className="imageListContainer">
            <div className={classes.root}></div>
            <ImageList
              className={classes.imageList}
              cols={10}
              style={{
                backgroundColor: "#00000055",
                backdropFilter: "blur(3px)",
              }}
            >
              {galleryImages.map((celebrityImage) => (
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
                    subtitle={"@" + celebrityImage.tags}
                    actionIcon={
                      <IconButton
                        sx={{
                          color: "rgba(255, 0, 0, 0.94)",
                          width: "18px",
                        }}
                        aria-label={`info about ${celebrityImage.tags}`}
                      >
                        <BidIcon style={{ fill: "white", width: "18px" }} />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        );
      }}
    </CurentCelebrityContext.Consumer>
  );
};

export default CelebrityImageList;

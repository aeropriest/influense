import { Component } from "react";
import firebaseContext, {
  firebaseDatabaseName,
} from "../../context/firebase.context";
import { CurentCelebrityContext } from "../../context/current.celebrity.context";
import "./celebrity.images.list.css";
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as BidIcon } from "./../../assets/images/bid-icon.svg";
const styles = (theme) => ({
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
});

class CelebrityImageList extends Component {
  state = {
    images: [],
    loaded: false,
  };

  componentDidMount() {
    console.log("componentDidMount from CelebrityImageList");
  }
  render() {
    const { classes } = this.props;

    return (
      <CurentCelebrityContext.Consumer>
        {(context) => {
          if (context.currentCelebrity) {
            const imageRecord = `${firebaseDatabaseName}/${context.currentCelebrity}/gallery`;
            firebaseContext
              .collection(imageRecord)
              .get()
              .then((data) => {
                this.state.images = [];
                data.forEach((d) => {
                  let i = d.data();
                  i["firebase_id"] = d.id;
                  this.state.images.push(i);
                });
                this.setState({ loaded: true });
              });
          }
          return (
            <div className="imageListContainer">
              <ImageList
                className={classes.imageList}
                cols={10}
                style={{
                  backgroundColor: "#00000055",
                  backdropFilter: "blur(3px)",
                }}
              >
                {this.state.images.map((celebrityImage) => (
                  <ImageListItem
                    key={celebrityImage.id}
                    onClick={() =>
                      context.setCurrentCelebrityImage(
                        celebrityImage.firebase_id
                      )
                    }
                  >
                    <img
                      key={`${celebrityImage.firebase_id}`}
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
  }
}

export default withStyles(styles, { withTheme: true })(CelebrityImageList);

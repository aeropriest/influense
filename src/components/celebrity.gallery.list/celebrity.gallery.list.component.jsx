import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as BidIcon } from "./../../assets/images/bid-icon.svg";
import { CelebritiesContext } from "../../context/celebrities.context";

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

export default function CelebrityImageList() {
  const classes = useStyles();
  return (
    <CelebritiesContext.Consumer>
      {(context) => {
        return (
          <div className="imageListContainer">
            <div className={classes.root}>
              <ImageList
                className={classes.imageList}
                cols={10}
                style={{
                  backgroundColor: "#00000055",
                  backdropFilter: "blur(3px)",
                }}
              >
                {context.celebrities.map((celebrity) => (
                  <ImageListItem
                    key={celebrity.id}
                    onClick={() => context.setSelectedCelebrity(celebrity)}
                  >
                    <img
                      src={`${celebrity.profileImg}`}
                      srcSet={`${celebrity.profileImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={celebrity.handle}
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
                          sx={{ color: "rgba(255, 0, 0, 0.94)", width: "18px" }}
                          aria-label={`info about ${celebrity.handle}`}
                        >
                          <BidIcon style={{ fill: "white", width: "18px" }} />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        );
      }}
    </CelebritiesContext.Consumer>
  );
}

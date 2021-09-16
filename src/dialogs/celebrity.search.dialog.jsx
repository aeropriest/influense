import { Dialog, makeStyles } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import CloseIcon from "@material-ui/icons/Cancel";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SearchBox from "../components/searchbox.component/searchbox.component";
import firebaseContext, {
  firebaseDatabaseName,
} from "../context/firebase.context";
import { CurentCelebrityContext } from "../context/current.celebrity.context";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#00000000",
    minWidth: "100vw",
    minHeight: "100vh",
    color: "#ffffff",
  },
  searchicon: {
    marginTop: "10px",
    marginLeft: "10px",
    width: "30px",
    height: "30px",
  },
  imageList: {
    width: "110vw",
    height: "100vh",
    padding: theme.spacing(1),
  },
  closeicon: {
    width: "100px",
    color: "rgba(255, 255, 255, 1)",
  },
  icon: {
    color: "rgba(255, 255, 255, 1.54)",
  },
  dialogWrapper: {
    backdropFilter: "blur(3px)",
    padding: theme.spacing(0),
    position: "absolute",
    top: theme.spacing(-2.5),
    backgroundColor: "#00000000",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#fff",
    borderStyle: "solid",
    minWidth: "99vw",
    minHeight: "97vh",
    boxShadow: "none",
    blurEffect: "systemMaterialLight",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2.5),
    color: "#ffffff",
  },
}));

const CelebritySearchDialog = (props) => {
  const [celebrities, setCelebrities] = useState([]);
  useEffect(() => {
    firebaseContext
      .collection(firebaseDatabaseName)
      .get()
      .then((celebritiesSnapshot) => {
        celebritiesSnapshot.forEach((celebrity) => {
          //setCelebrities({ ...celebrities, celebrity.data() });
          let c = celebrity.data();
          c["firebase_id"] = celebrity.id;
          celebrities.push(c);
        });
      });
  }, []);
  const { searchDialogOpen, setSearchDialogOpen } = props;

  const classes = useStyles();

  function handleChange(event) {
    // const temp = CELEBRITY_DATA
    // setCelebrities(temp.filter(celeb =>
    //   celeb.name.toLowerCase().includes(event.target.value.toLowerCase())
    //   ))
  }
  const handleClose = () => {
    setSearchDialogOpen(false);
  };

  return (
    <CurentCelebrityContext.Consumer>
      {(context) => {
        if (!context.currentCelebrity && celebrities.length) {
          context.setCurrentCelebrityHandle(celebrities[0].firebase_id);
        }

        return (
          <Dialog
            onClose={handleClose}
            open={searchDialogOpen}
            maxWidth="md"
            classes={{ paper: classes.dialogWrapper }}
          >
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            <div className={classes.root}>
              <SearchBox
                placeHolder="search ramayana character"
                handleChange={handleChange}
              />
              <ImageList
                rowHeight={280}
                cols={6}
                gap={8}
                className={classes.imageList}
                style={{ marginTop: "-20px" }}
              >
                <ImageListItem
                  key="Subheader"
                  cols={6}
                  style={{ height: "auto" }}
                ></ImageListItem>
                {celebrities.map((celebrity) => (
                  <ImageListItem
                    key={celebrity.id}
                    onClick={() =>
                      context.setSelectedCelebrityHandle(celebrity.handle)
                    }
                  >
                    <img src={celebrity.profileImg} alt={celebrity.handle} />
                    <ImageListItemBar
                      style={{
                        backgroundColor: "#00000055",
                        height: "50px",
                        backdropFilter: "blur(3px)",
                      }}
                      title={celebrity.name}
                      subtitle={<span>@{celebrity.handle}</span>}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${celebrity.handle}`}
                          className={classes.icon}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Dialog>
        );
      }}
    </CurentCelebrityContext.Consumer>
  );
};

export default CelebritySearchDialog;

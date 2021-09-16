import { Dialog, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import firebaseContext, {
  firebaseDatabaseName,
} from "../context/firebase.context";
import { CurentCelebrityContext } from "../context/current.celebrity.context";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  imageList: {
    width: "70%",
    height: "70%",
    padding: theme.spacing(1),
  },
  dialogWrapper2: {
    backdropFilter: "blur(3px)",
    padding: theme.spacing(0),
    position: "absolute",
    top: theme.spacing(-2.5),
    backgroundColor: "#000000AA",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#fff",
    borderStyle: "solid",
    width: "20vw",
    minHeight: "97vh",
    boxShadow: "none",
    blurEffect: "systemMaterialLight",
    marginLeft: "auto",
    marginRight: 0,
    left: "79vw",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(-1.0),
    top: theme.spacing(-1.0),
    color: "#ffffff",
  },
  spacer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#00000000",
    minWidth: "100vw",
    minHeight: "100vh",
    color: "#ffffff",
  },
}));

const CelebrityProfilesDialog = (props) => {
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
  const { CelebrityProfilesDialogOpen, setCelebrityProfilesDialogOpen } = props;
  const classes = useStyles();

  const handleClose = () => {
    setCelebrityProfilesDialogOpen(false);
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
            open={CelebrityProfilesDialogOpen}
            classes={{ paper: classes.dialogWrapper2 }}
          >
            <ImageList
              rowHeight={80}
              cols={1}
              gap={8}
              className={classes.imageList}
              style={{ marginTop: "20px" }}
            >
              {celebrities.map((celebrity) => (
                <ImageListItem
                  key={celebrity.id}
                  style={{ with: "80px", height: "80px" }}
                  onClick={() =>
                    context.setCurrentCelebrityHandle(celebrity.firebase_id)
                  }
                >
                  <img src={celebrity.profileImg} alt={celebrity.handle} />
                </ImageListItem>
              ))}
            </ImageList>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Dialog>
        );
      }}
    </CurentCelebrityContext.Consumer>
  );
};

export default CelebrityProfilesDialog;

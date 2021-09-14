import { Dialog, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import { CelebritiesContext } from "../context/celebrities.context";

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
    width: "15vw",
    minHeight: "97vh",
    boxShadow: "none",
    blurEffect: "systemMaterialLight",
    marginLeft: "auto",
    marginRight: 0,
    left: "84vw",
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
  const { CelebrityProfilesDialogOpen, setCelebrityProfilesDialogOpen } = props;
  const classes = useStyles();

  const handleClose = () => {
    setCelebrityProfilesDialogOpen(false);
  };

  return (
    <CelebritiesContext.Consumer>
      {(context) => {
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
              {context.celebrities.map((cleb) => (
                <ImageListItem
                  key={cleb.id}
                  style={{ with: "80px", height: "80px" }}
                >
                  <img src={cleb.profileImg} alt={cleb.handle} />
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
    </CelebritiesContext.Consumer>
  );
};

export default CelebrityProfilesDialog;

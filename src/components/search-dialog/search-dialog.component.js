import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Dialog, makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SearchBox from '../searchbox.component/searchbox.component'
import { withStyles } from '@material-ui/core/styles';


import './search-dialog.styles.css'
import CELEBRITY_DATA from '../../context/celebrities.data'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#00000022',
        minWidth: '96vw',        
        minHeight: '95vh',
        color: '#ffffff'
      },
      searchicon:{
        marginTop: '10px',
        marginLeft: '10px',
        width: '30px',
        height: '30px'

    },
      imageList: {
        width: '110vw',
        height: '100vh',
        padding: theme.spacing(1),
      },
      closeicon:{
        width: '80px',
        height: '80px',
        color: 'rgba(255, 255, 255, 1)',
    },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },    
    dialogWrapper: {
        padding: theme.spacing(0),
        position: 'absolute',
        top: theme.spacing(0),
        backgroundColor: '#00000000',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#fff",
        borderStyle: "solid",        
        minWidth: '96vw',        
        minHeight: '95vh',
        boxShadow: 'none',      
        blurEffect: 'systemMaterialLight',  
    },
    closeButton: {
      width: '50px',
      height: '50px',
      backgroundColor: '#ff0000',

      left: '50vw',
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
}))


const SearchDialog = (props) => {
    const celebs = CELEBRITY_DATA

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    
    function handleChange(event) {
      console.log(event)
  }    
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };  
  const handleClose = () => {
    setOpen(false);
  };  
    return (
    <Dialog onClose={handleClose} open={open} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
     <div className={classes.root}>
     <SearchBox
          placeHolder='search ramayana character'
          handleChange = {handleChange}
        />
      <ImageList rowHeight={280} cols={6} gap={8} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={6}  style={{ height: 'auto' }}>
        </ImageListItem>
        {celebs.map((cleb) => (
          <ImageListItem key={cleb.id}>
            <img src={cleb.thumbnail} alt={cleb.handle} />
            <ImageListItemBar
              title={cleb.name}
              subtitle={<span>by: {cleb.handle}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${cleb.handle}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </Dialog>
    )
}

export default SearchDialog
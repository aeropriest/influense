import React from 'react'
import { Dialog, makeStyles, Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { TextField } from '@material-ui/core';
import './search-dialog.styles.css'
import CELEBRITY_DATA from '../../context/celebrities.data'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#000000cc',
        minWidth: '96vw',        
        minHeight: '95vh',
      },
      imageList: {
        width: '110vw',
        height: '100vh',
        padding: theme.spacing(1),
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },    
    dialogWrapper: {
        padding: theme.spacing(0),
        position: 'absolute',
        top: theme.spacing(0),
        backgroundColor: '#000000cc',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#fff",
        borderStyle: "solid",        
        minWidth: '96vw',        
        minHeight: '95vh',
        boxShadow: 'none',      
        blurEffect: 'systemMaterialLight',  
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))
 
const SearchDialog = (props) => {
    const celebs = CELEBRITY_DATA

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
     <div className={classes.root}>
     <TextField
    id="outlined-secondary"
    label="Outlined secondary"
    variant="outlined"
    color="secondary"
  />
      <ImageList rowHeight={280} cols={6} gap={8} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={6}  style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
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
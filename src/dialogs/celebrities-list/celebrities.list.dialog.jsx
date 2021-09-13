import React, { useState } from 'react'
import { Dialog, makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import CloseIcon from '@material-ui/icons/Cancel';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import db from '../../context/firebase/firebase'


import './celebrities.list.dialog.styles.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#00000000',
        minWidth: '100vw',        
        minHeight: '100vh',
        color: '#ffffff'
      },
      imageList: {
        width: '110vw',
        height: '100vh',
        padding: theme.spacing(1),
      },
      closeicon:{
        width: '100px',
        color: 'rgba(255, 255, 255, 1)',
    },
      icon: {
        color: 'rgba(255, 255, 255, 1.54)',
      },    
    dialogWrapper: {
        backdropFilter: "blur(3px)",
        padding: theme.spacing(0),
        position: 'absolute',
        top: theme.spacing(-2.5),
        backgroundColor: '#00000000',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#fff",
        borderStyle: "solid",        
        minWidth: '99vw',        
        minHeight: '97vh',
        boxShadow: 'none',      
        blurEffect: 'systemMaterialLight',  
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2.5),
      color: '#ffffff',
    },    
}))


const CelebritiesListDialog = (props) => {
  const [celebritiesList, setCelebritiesList] = useState([]);

  window.addEventListener('load', () => {
    console.log('------celebrties dialog open------')
		Fetchdata();
	});

	// Fetch the required data using the get() method
	const Fetchdata = ()=>{
		db.collection("influensers").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = element.data();
				setCelebritiesList(arr => [...arr , data]);
        console.log(celebritiesList)
			});
		})
    
	}  
    const { celebritiesListDialogOpen, setCelebritiesListDialogOpen } = props;
    const classes = useStyles();
    

    const handleClose = () => {
      setCelebritiesListDialogOpen(false);
    }
  
    return (
    <Dialog onClose={handleClose} open={celebritiesListDialogOpen} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
              </IconButton>

     <div className={classes.root}>
      <ImageList rowHeight={280} cols={6} gap={8} className={classes.imageList} style={{marginTop:'-20px'}}>
        <ImageListItem key="Subheader" cols={6}  style={{ height: 'auto' }}>
        </ImageListItem>
        {celebritiesList.map((cleb) => (
          <ImageListItem key={cleb.id}>
            <img src={cleb.profileImg} alt={cleb.handle} />
            <ImageListItemBar
            style={{ backgroundColor:'#00000055', height: '50px', backdropFilter: "blur(3px)"}}
              title={cleb.name}
              subtitle={<span>@{cleb.handle}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </Dialog>
    )
}

export default CelebritiesListDialog
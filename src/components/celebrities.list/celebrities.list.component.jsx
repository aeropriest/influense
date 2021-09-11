import React, { useState } from 'react'
import { Dialog, makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import CloseIcon from '@material-ui/icons/Cancel';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from '../searchbox.component/searchbox.component'
import db from '../../context/firebase/firebase'


import './celebrities.list.component.css'
import CELEBRITY_DATA from '../../context/celebrities/celebrities.data'

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


const CelebritiesListComponent = (props) => {
    const [celebrities , setCelebrities] = useState([]);

    window.addEventListener('load', () => {
          Fetchdata();
      });
  
      // Fetch the required data using the get() method
      const Fetchdata = ()=>{
          db.collection("influensers").get().then((querySnapshot) => {
              
              // Loop through the data and store
              // it in array to display
              querySnapshot.forEach(element => {
                  var data = element.data();
                  setCelebrities(arr => [...arr , data]);
          console.log('99999999999')
          console.log(data)
              });
          })
      }  

    const { open, setOpen } = props;
    const classes = useStyles();
    
    function handleChange(event) {
      const temp = CELEBRITY_DATA
      setCelebrities(temp.filter(celeb => 
        celeb.name.toLowerCase().includes(event.target.value.toLowerCase())
        ))
    }
    const handleClose = () => {
      setOpen(false);
    }
  
    return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
              </IconButton>

     <div className={classes.root}>
     <SearchBox
          placeHolder='search ramayana character'
          handleChange = {handleChange}
        />
      <ImageList rowHeight={280} cols={6} gap={8} className={classes.imageList} style={{marginTop:'-20px'}}>
        <ImageListItem key="Subheader" cols={6}  style={{ height: 'auto' }}>
        </ImageListItem>
        {celebrities.map((cleb) => (
          <ImageListItem key={cleb.id}>
            <img src={cleb.thumbnail} alt={cleb.handle} />
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

export default CelebritiesListComponent
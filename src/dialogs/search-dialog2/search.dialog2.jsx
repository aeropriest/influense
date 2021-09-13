import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { Dialog, makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import SearchBox from '../../components/searchbox.component/searchbox.component';
import CloseIcon from '@material-ui/icons/Cancel';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import db from '../../context/firebase/firebase'


import './search.dialog2.styles.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#00000000',
        minWidth: '5vw',        
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
        marginTop: '200px',
        width: '10%',
        height: '50%',
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
        minWidth: '5vw',        
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


const SearchDialog2 = (props) => {
  const [celebrities, setCelebrities] = useState([]);

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
			});
		})
	}  
    const { searchDialog2Open, setSearchDialog2Open } = props;
    const classes = useStyles();
    
    const handleClose = () => {
      setSearchDialog2Open(false);
    }
    function handleChange(event) {
      // const temp = CELEBRITY_DATA
      // setCelebrities(temp.filter(celeb => 
      //   celeb.name.toLowerCase().includes(event.target.value.toLowerCase())
      //   ))
    }

    return (
    <Dialog onClose={handleClose} open={searchDialog2Open} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
      </IconButton>

     <div className={classes.root}>
     <SearchBox
          placeHolder='search ramayana character'
          handleChange = {handleChange}
          style={{width:'100px'}}
        />

      <ImageList rowHeight={280} cols={1} gap={8} className={classes.imageList} style={{marginTop:'-20px'}}>
        <ImageListItem key="Subheader" cols={6}  style={{ height: 'auto' }}>
        </ImageListItem>
        {celebrities.map((cleb) => (
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

export default SearchDialog2
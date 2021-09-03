import { useContext } from 'react'
import CelebrityDataContext from '../../context/celebrities.data.context'
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import './celebrity-image-list.styles.scss'
import { ReactComponent as BidIcon } from './../../assets/images/bid-icon.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black', //theme.palette.background.paper,
    
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },  
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)',
  },
  image:{
    height: '100%',
    width: '100%',
  },
  text:{
    fontSize: 5,
  }
}));

export default function CelebrityImageList() {
  const celebs = useContext(CelebrityDataContext)    
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
    <div className='imageListContainer'>
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={10}>
        {celebs.map((celeb) => (
            <ImageListItem key={celeb.id}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zdepth={state.shadow}

            onClick={() => { alert(celeb.handle) }}            
          >
            <img
              src={`${celeb.imageUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${celeb.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={celeb.handle}
              loading="lazy"
            />
            <ImageListItemBar style={{height: '20'}}
              subtitle={'@'+celeb.handle}              
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 0, 0, 0.94)',  width:'18px'}}
                  aria-label={`info about ${celeb.handle}`}
                >
                  <BidIcon style={{fill: "white", width:'18px'}}/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}

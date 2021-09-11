import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as BidIcon } from './../../assets/images/bid-icon.svg'
import CELEBRITY_DATA from '../../context/celebrities/celebrities.data'
import { SelectedCelebrityContext } from '../../context/celebrities/selected.celebrity.context'
import db from '../../context/firebase/firebase'

import './celebrity-image-list.styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black', //theme.palette.background.paper,
    
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

  //const celebrities = CELEBRITY_DATA
  const classes = useStyles()
  console.log('CELEBRITY_DATA IS HERE')
  console.log(celebrities)

  return(
    <SelectedCelebrityContext.Consumer>{(context) => {
      const { setSelectedCelebrity } = context
    return ( 
        <div className='imageListContainer'>
        <div className={classes.root}>
          <ImageList className={classes.imageList} cols={10}
          style={{ backgroundColor:'#00000055', backdropFilter: "blur(3px)"}}>
            {celebrities.map((celeb) => (
                <ImageListItem key={celeb.id}
                    onClick=
                    {
                        ()=>setSelectedCelebrity(celeb)
                    }
                >                                
                <img
                  src={`${celeb.profileImg}`}
                  srcSet={`${celeb.profileImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={celeb.handle}
                  loading="lazy"
                />
                
                <ImageListItemBar style={{ backgroundColor:'#00000055', height: '35px', backdropFilter: "blur(3px)"}}
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
      )
    }}            
    </SelectedCelebrityContext.Consumer>        
)   
  /*
  return (
    <div className='imageListContainer'>
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={10}>
        {celebrities.map((celeb) => (
            <ImageListItem key={celeb.id}
            onClick={() => {
               console.log('item clicked')
               console.log(celeb)
            }}>                                
            <img
              src={`${celeb.posterUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${celeb.posterUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
  */
}

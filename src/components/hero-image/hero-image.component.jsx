import Header from '../header/header-component'
import BiddingBlock from '../../components/bidding-block/bidding-block.component'
import {SelectedCelebrityContext} from '../../context/selected.celebrity.context'

import './hero-image.styles.css'


const HeroImage = () => {
/*
    const celebrity = {
        handle: 'ashokjaiswal1',
        name: 'ashok jaiswal',
        followers: 263,
        highestBid: 8.0,
        timeLeft: 29288,
        imageUrl: 'https://i.ibb.co/bPjs6tM/cadfbd38e105024bf475bd1a4f113932.jpg',
        id: 1,
        linkUrl: 'Celebrity/arianagrande'            
       }      
       const { handle, name, followers, highestBid, timeLeft, imageUrl } = celebrity
       */
    return(
        <SelectedCelebrityContext.Consumer>{(context) => {
            console.log('----- hero image -----')
            console.log(context)
            const { handle, name, followers, highestBid, timeLeft, imageUrl } = context.selectedCelebrity
            return(
                <div className='celebrity-hero-background' style={{ '--img': `url(${imageUrl})` }}>
                    <Header/>
                    <div className="heading-text">{name}</div>
                    <div className="small-text">@{handle}</div>
                    <div className="small-text">{followers}M followers</div>            
                    <BiddingBlock highestBid = {highestBid}/> 
                </div>
            )
        }}            
        </SelectedCelebrityContext.Consumer>        
    )    
}

export default HeroImage
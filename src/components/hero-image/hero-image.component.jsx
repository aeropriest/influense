import { useState, useEffect, useRef } from "react";
import Header from '../header/header-component'
import BiddingBlock from '../../components/bidding-block/bidding-block.component'
import {SelectedCelebrityContext} from '../../context/celebrities.context/selected.celebrity.context'

import './hero-image.styles.css'


const HeroImage = () => {    
    const [searchWindow, setSearchWindow] = useState(false);
    const [sidepanelWindow, setSidepanelWindow] = useState(false);
    const [bannerDelay, setBannerDelay] = useState(false);
  
    return(
        <SelectedCelebrityContext.Consumer>{(context) => {
//            console.log('----- hero image -----')
//            console.log(context)
            const { handle, name, followers, highestBid, timeLeft, profileImg } = context.selectedCelebrity
            return(
                <div className='celebrity-hero-background' style={{ '--img': `url(${profileImg})` }}>
                    <Header
                        setSearchWindow={setSearchWindow}
                        setSidepanelWindow={setSidepanelWindow}
                        setBannerDelay={setBannerDelay}
                    />              
                    <div className="heading-text">{name}</div>
                        <div className="handle-text">@{handle}</div>
                        <div className="followers-text">{followers}M followers</div>            
                    <BiddingBlock highestBid = {highestBid}/> 
                </div>
            )
        }}            
        </SelectedCelebrityContext.Consumer>        
    )    
}

export default HeroImage
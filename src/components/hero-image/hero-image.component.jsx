import { useContext } from 'react'
import CelebrityContext from '../../context/celebrities.context'
import BiddingBlock from '../bidding-block/bidding-block.component'
import Header from '../header/header-component'
import CelebritiesStrip from '../../components/celebrities-strip/celebrities-strip.component'


import './hero-image.styles.scss'

const HeroImage = () => {
    const Celebrities = useContext(CelebrityContext)    
    const { handle, name, followers, imageUrl, highestBid } = Celebrities[1]
    console.log(handle)
    return(
        <div className='celebrity-hero-background' style={{ '--img': `url(${imageUrl})` }}>
            <Header/>
            <div className="heading-text">{name}</div>
            <div className="small-text">@{handle}</div>
            <div className="small-text">{followers}M followers</div>            
            <BiddingBlock Celebrity = {Celebrities[1]}/>
            <CelebritiesStrip style={{marginTop: '50vh', marginLeft: '-80vw', width: '100vw'}}/>
        </div>
    )
}

export default HeroImage
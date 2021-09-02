import { useContext } from 'react'
import InfluencerContext from '../../context/influencer.context'
import BiddingBlock from '../bidding-block/bidding-block.component'
import './hero-image.styles.scss'

const HeroImage = () => {
    const influencers = useContext(InfluencerContext)    
    const { handle, name, followers, imageUrl, highestBid } = influencers[1]
    console.log(handle)
    return(
        <div className='celebrity-hero-background' style={{ '--img': `url(${imageUrl})` }}>
            <div className="heading-text">{name}</div>
            <div className="small-text">@{handle}</div>
            <div className="small-text">{followers}M followers</div>            
            <BiddingBlock/>
        </div>
    )
}

export default HeroImage
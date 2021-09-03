import { useContext } from 'react'
import Header from '../header/header-component'
import { CurrentCelebrityContext } from '../../context/CurrentCelebrityContext'
import { CelebrityConsumer } from '../../context/CurrentCelebrityContext'
import BiddingBlock from '../../components/bidding-block/bidding-block.component'
import './hero-image.styles.scss'


const HeroImage = () => {
    const celebrity = useContext(CurrentCelebrityContext)
    console.log('data from contect')
    console.log(celebrity)
    const { handle, name, followers, highestBid, timeLeft, imageUrl } = celebrity
    console.log(handle)
    return(
        <div className='celebrity-hero-background' style={{ '--img': `url(${imageUrl})` }}>
            <Header/>
            <div className="heading-text">{name}</div>
            <div className="small-text">@{handle}</div>
            <div className="small-text">{followers}M followers</div>            
            <BiddingBlock highestBid = {highestBid}/> 
        </div>
    )
}

export default HeroImage
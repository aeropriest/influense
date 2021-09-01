import { useContext } from 'react'
import InfluencerContext from '../../context/influencer.context'

import './hero-image.styles.scss'

const HeroImage = () => {
    const influencers = useContext(InfluencerContext)    
    const { title, imageUrl, size, history, linkUrl, match } = influencers[1]
    return(
        <div className='celebrity-hero-background' style={{ backgroundImage: `url(${imageUrl})` }}>
            @{title}
        </div>
    )
}

export default HeroImage
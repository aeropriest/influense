
import './bidding-block.styles.scss'

const BiddingBlock = ({influencer}) => {
    const { handle, name, followers, imageUrl, highestBid } = influencer
    return(  
        <div className='bidding-container'>        
            <div className="small-text1">Highest Bid</div>                          
            <div className="heading-text1">{highestBid/100} ETH</div>  
            <div className="small-text1"><b>8</b> h <b>8</b> m left</div>                          
            <button className="button bid-button">BID NOW !</button> 
        </div>
        )    
}

export default BiddingBlock
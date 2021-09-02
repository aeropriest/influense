import './bidding-block.styles.scss'
import { ReactComponent as ClockIcon } from './../../assets/images/clock-icon.svg'
import { ReactComponent as EthereumIcon } from './../../assets/images/etherium.svg'

const BiddingBlock = ({highestBid, timeleft}) => {
    return(  
        <div className='bidding-container'>        
            <div className="small-text1">Highest Bid</div>                          
            <div className="heading-text1"><EthereumIcon className='ethereum-icon'/>{highestBid/100} ETH</div>  
            <div className="small-text1"><ClockIcon className='clock-icon'/> <b>8</b> h <b>8</b> m left</div>                          
            <button className="button bid-button">BID NOW !</button> 
        </div>
        )    
}

export default BiddingBlock
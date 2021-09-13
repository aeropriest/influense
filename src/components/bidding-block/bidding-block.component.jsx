import { ReactComponent as ClockIcon } from './../../assets/images/clock-icon.svg'
import { ReactComponent as EthereumIcon } from './../../assets/images/etherium.svg'
import { ReactComponent as BidIcon } from './../../assets/images/bid-icon.svg'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './bidding-block.styles.css'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'secondary',
      borderRadius: 50,
      width: '18vw',
      height: '6.5vh',
      fontFamily: 'HelveticaNeue-CondensedBold',
    },
  }))

const BiddingBlock = ({highestBid, timeleft}) => {
    const classes = useStyles();
    return(
        <div className='bidding-container'>        
            <div className="small-text1">Highest Bid</div>                          
            <div className="heading-text1"><EthereumIcon className='ethereum-icon'/>{highestBid/100} ETH</div>  
            <div className="small-text1"><ClockIcon className='clock-icon'/> <b>8</b> h <b>8</b> m left</div>                                      
            <Button
                style={{ fontSize: '25px' }}
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<BidIcon style={{width:'30px'}}/>}
            >BID NOW!
            </Button>
        </div>
        )    
}

export default BiddingBlock
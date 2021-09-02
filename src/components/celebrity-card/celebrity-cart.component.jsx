import './celebrity-card.styles.scss'

const CelebrityCard = ({imageUrl, handle}) => {

    return(
      <div className='CelebrityCard'>
        <div class='container'>
          <img src={imageUrl} class='celebrityCardImage' alt={handle}/>
          <div className='dark-overlay'>
            <div class='celebrityName'>@{handle}</div>
        </div>
        </div>
      </div>
    )
  }
  export default CelebrityCard
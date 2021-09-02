import React from 'react'
import { withRouter } from 'react-router-dom'

import './Celebrity-item.styles.scss'

const CelebrityItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} Celebrity-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>@{title.toLowerCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default CelebrityItem

import { useContext } from 'react'
import InfluencerContext from '../../context/influencer.context'
import InfluencerItem from '../influencer-item/influencer-item.component'

import './influencer.styles.scss'

const InfluencerComponent = () => {
  const influencers = useContext(InfluencerContext)

  return (<div className='directory-menu'>
    {influencers.map(({ id, ...otherSectionProps }) => (
      <InfluencerItem key={id} {...otherSectionProps} />
    ))}
  </div>
)}

export default InfluencerComponent

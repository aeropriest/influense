import { useContext } from 'react'
import CelebrityContext from '../../context/Celebrity.context'
import CelebrityItem from '../Celebrity-item/Celebrity-item.component'

import './Celebrity.styles.scss'

const CelebrityComponent = () => {
  const Celebrities = useContext(CelebrityContext)

  return (<div className='directory-menu'>
    {Celebrities.map(({ id, ...otherSectionProps }) => (
      <CelebrityItem key={id} {...otherSectionProps} />
    ))}
  </div>
)}

export default CelebrityComponent

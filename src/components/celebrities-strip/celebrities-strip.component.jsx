import { useContext } from 'react'
import CelebrityContext from '../../context/celebrities.context'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import CelebrityCard from '../celebrity-card/celebrity-cart.component';

import './celebrities-strip.styles.scss'



const CelebritiesStrip = () => {
  const celebrities = useContext(CelebrityContext)   
  return (  
    <div className='stripContainer'> 
    <ScrollMenu>
    {
      celebrities.map((celebrity) => (
        <CelebrityCard
          imageUrl={celebrity.imageUrl}
          handle={celebrity.handle}
        />
      ))
    }
    {
      celebrities.map((celebrity) => (
        <CelebrityCard
          imageUrl={celebrity.imageUrl}
          handle={celebrity.handle}
        />
      ))
    }
    {
      celebrities.map((celebrity) => (
        <CelebrityCard
          imageUrl={celebrity.imageUrl}
          handle={celebrity.handle}
        />
      ))
    }    
    </ScrollMenu>     
   </div>
  )
}

export default CelebritiesStrip
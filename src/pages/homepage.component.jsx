import HeroImage from './../components/hero-image/hero-image.component'
import CelebrityImageList from '../components/celebrity-image-list/celebrity-image-list.component'

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <HeroImage />
    <CelebrityImageList />

  </div>
)

export default HomePage

import { createContext } from "react"
import CELEBRITY_DATA from './celebrities.data'

const CelebrityContext = createContext(CELEBRITY_DATA)

export default CelebrityContext
import { createContext } from "react"
import INFLUENCER_DATA from './influencers.data'

const InfluencerContext = createContext(INFLUENCER_DATA)

export default InfluencerContext
import { createContext, useEffect, useState } from "react"


export const CelebrityContext = createContext({
    celebrityHandle: '',
    changeCelebrity: () => {}
})

const CelebrityProvider = ({ celebrity }) => {
    const [celebrityHandle, setCelebrityHandle] = useState('')
    const changeCelebrity = celebrity => setCelebrityHandle(celebrity)

    return(
        <CelebrityContext.Provider
            value={{
                celebrityHandle,
                changeCelebrity
            }}
        >{celebrity}</CelebrityContext.Provider>
    )
}

export default CelebrityProvider
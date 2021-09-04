import React, {Component, createContext} from 'react'

export const SelectedCelebrityContext = createContext()

class SelectedCelebrityContextProvider extends Component {
    state = {
        selectedCelebrity: {
            handle: 'arianagrande',
            name: 'Ariana Grande',
            followers: 263,
            highestBid: 8.0,
            timeLeft: 29288,
            posterUrl: 'https://i.ibb.co/bPjs6tM/cadfbd38e105024bf475bd1a4f113932.jpg',
            id: 1,
            linkUrl: 'Celebrity/arianagrande'            
        },
        isLightThem: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    setSelectedCelebrity = (celebrity) => {
        this.setState({selectedCelebrity : celebrity})
        console.log('setSelectedCelebrity', this.state.selectedCelebrity)

    }
    toggleTheme = () => {
        this.setState({isLightThem: !this.state.isLightThem})
    }
    render(){
        return(
            <SelectedCelebrityContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, setSelectedCelebrity: this.setSelectedCelebrity}}>
                {this.props.children}
            </SelectedCelebrityContext.Provider>
        )
    }
}

export default SelectedCelebrityContextProvider
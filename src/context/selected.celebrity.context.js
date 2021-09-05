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
            posterUrl: 'https://res.cloudinary.com/ddyxd84wz/image/upload/v1630759459/arianagrande.png',
            thumbnail: 'https://res.cloudinary.com/ddyxd84wz/image/upload/v1630759459/arianagrande.png',
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
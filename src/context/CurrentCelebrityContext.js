import React,{Component} from 'react';
export const CurrentCelebrityContext=React.createContext();
export class CelebrityProvider extends Component {
 state={
        handle: 'arianagrande',
        name: 'Ariana Grande',
        followers: 263,
        highestBid: 8.0,
        timeLeft: 29288,
        imageUrl: 'https://i.ibb.co/bPjs6tM/cadfbd38e105024bf475bd1a4f113932.jpg',
        id: 1,
        linkUrl: 'Celebrity/arianagrande'
   }
 render(){
    return (
        <CurrentCelebrityContext.Provider value={this.state}>
            {this.props.children}
        </CurrentCelebrityContext.Provider>
    )
 }
}
const CelebrityConsumer=CurrentCelebrityContext.Consumer
export default CelebrityConsumer
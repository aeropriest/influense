import { Link } from 'react-router-dom'


import './header-component.scss'
import { ReactComponent as SearchIcon } from './../../assets/images/search-icon.svg'

const Header = () => {
    const style = {
        zIndex: '100'
    }    
    return(
            <div className='header'>
                <h1>this is the header</h1>
                <SearchIcon className='logo' />
            </div>
    )
}

export default Header
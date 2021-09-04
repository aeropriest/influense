import { Link } from 'react-router-dom'
import { ReactComponent as SearchIcon } from './../../assets/images/search-icon.svg'
import { ReactComponent as DropMenu } from './../../assets/images/drop-down.svg'
import { ReactComponent as MainMenu } from './../../assets/images/main-menu.svg'
import { ReactComponent as UserIcon } from './../../assets/images/user-icon.svg'

import './header-component.styles.css'
const Header = () => {
    return(
            <div className='header'>
                <MainMenu className='main-menu'/>
                <div className='options'>
                    <SearchIcon className='option' />
                    <DropMenu className='option'/>
                    <UserIcon className='option'/>
                </div>
            </div>
    )
}

export default Header
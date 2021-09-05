import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from './../../assets/images/search-icon.svg'
import { ReactComponent as DropMenu } from './../../assets/images/drop-down.svg'
import { ReactComponent as MainMenu } from './../../assets/images/main-menu.svg'
import { ReactComponent as UserIcon } from './../../assets/images/user-icon.svg'
import SearchDialog from '../search-dialog/search-dialog.component'


import './header-component.styles.css'
const Header = () => {
    const [openPopup, setOpenPopup] = useState(false)
    return(
            <div className='header'>
                <MainMenu className='main-menu'/>
                <div className='options'>
                    <SearchIcon className='option' 
                    onClick={() => { setOpenPopup(true) }}

                    />
                    <DropMenu className='option'/>
                    <UserIcon className='option'/>
                </div>
                <SearchDialog
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                >
            </SearchDialog>

            </div>
    )
}

export default Header
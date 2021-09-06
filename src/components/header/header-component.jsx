import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from './../../assets/images/search-icon.svg'
import { ReactComponent as DropMenu } from './../../assets/images/drop-down.svg'
import { ReactComponent as MainMenu } from './../../assets/images/main-menu.svg'
import { ReactComponent as UserIcon } from './../../assets/images/user-icon.svg'
import SearchDialog from '../search-dialog/search-dialog.component'


import './header-component.styles.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    return(
            <div className='header'>
                <MainMenu className='main-menu'/>
                <div className='options'>
                    <SearchIcon className='option' 
                    style={{height:'35px'}}
                    onClick={() => { setOpen(true) }}
                    />
                    <DropMenu className='option' style={{height:'30px'}}/>
                    <UserIcon className='option'/>
                </div>
                <SearchDialog
                open={open}
                setOpen={setOpen}
                >
            </SearchDialog>

            </div>
    )
}

export default Header
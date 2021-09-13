import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from './../../assets/images/search-icon.svg'
import { ReactComponent as DropMenu } from './../../assets/images/drop-down.svg'
import { ReactComponent as MainMenu } from './../../assets/images/main-menu.svg'
import { ReactComponent as UserIcon } from './../../assets/images/user-icon.svg'
import SearchDialog from '../../dialogs/search-dialog/search.dialog'
import SearchDialog2 from '../../dialogs/search-dialog2/search.dialog2'
import CelebritiesListDialog from '../../dialogs/celebrities-list/celebrities.list.dialog'
import Web3 from "web3";

import './header-component.styles.css'

const connectWallet = async (data) => {
    try {
        // Get network provider and web3 instance.
        //const web3 = await getWeb3();
        let web3
        if( window.ethereum ){
          web3 = new Web3(window.ethereum)
          await window.ethereum.enable()        
        } else if( window.web3 ){
          web3 = new Web3(window.web3.currentProvider)
        }      
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
  
        // Get the contract instance.
        // const networkId = await web3.eth.net.getId();
        // const deployedNetwork = SimpleStorageContract.networks[networkId];
        // const instance = new web3.eth.Contract(
        //   SimpleStorageContract.abi,
        //   deployedNetwork && deployedNetwork.address,
        // );
  
        console.log(accounts)
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        //this.setState({ web3, accounts, contract: instance }, this.runExample);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }

    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("I am a done promise!"), 3000)
    // });

    // let result = await promise

    // alert(result);
}

const Header = () => {
    const [searchDialog2Open, setSearchDialog2Open] = useState(false)  
    const [searchDialogOpen, setSearchDialogOpen] = useState(false)
    return(
            <div className='header'>
                <MainMenu className='main-menu'/>
                <div className='options'>
                    <SearchIcon className='option' 
                    style={{height:'35px'}}
                         onClick={() => { setSearchDialogOpen(true) }}
                    />
                    <DropMenu className='option' 
                    style={{height:'30px'}}
                    onClick={() => { setSearchDialog2Open(true) }}
                    />
                    <UserIcon className='option'
                    onClick={() => { 
                        connectWallet("Example")
                     }}
                    />
                </div>
                <SearchDialog
                  searchDialogOpen={searchDialogOpen}
                  setSearchDialogOpen={setSearchDialogOpen}
                />
                <SearchDialog2
                  searchDialog2Open={searchDialog2Open}
                  setSearchDialog2Open={setSearchDialog2Open}
                />
            </div>
    )
}

export default Header
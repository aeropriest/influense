import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './searchbox.styles.css'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000000',
        width: '40%',        
        height: '50px',
        borderWidth: '0.2px',
        borderRadius: 10,
        borderStyle: "solid",   
        color: "white", 
    },
    searchicon:{
        width: '25px',
    },
    textfiled: {
        width: '100%',
        borderWidth: '0.0px',
        borderStyle: "solid",    
        color: "white", 
        fontWeight: 100,
    }, 
    textfiledFocused:{
        borderWidth: '0.0px',
    },
}))

const SearchBox = ({handleChange}) => {
    const classes = useStyles();
    return(
            <div className={classes.root} 
            style={{ margin: "20px", padding: "0px"}}
            >
            <SearchIcon className={classes.searchicon} style={{ margin: "15px", padding: "0px"}}/>
                <TextField style={{ marginTop: "-10px", marginLeft: '-25px', padding: "0px"}}
                type="input"
                    variant="filled"
                    margin="normal"
                    InputProps={{
                            classes: {
                                root: classes.textfiled,
                                focused: classes.textfiledFocused,
                            }
                        }}      
                        onChange={handleChange}
                        defaultValue = 'Search'                    
                    />             
            </div>             
    )
}
    
export default SearchBox
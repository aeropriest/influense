import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './searchbox.styles.css'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000000',
        width: '40vw',        
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
        width: '35vw',
        borderWidth: '0.0px',
        borderStyle: "solid",    
        color: "white", 
        fontWeight: 100,
    }, 
    textfiledFocused:{
        marginTop: '-12px',
        width: '35vw',
        height: '40px',
        borderWidth: '5.0px',
        borderStyle: "solid",    
        color: "white", 
        borderColor: '#000000',
        fontWeight: 120,
        marginLeft: '0px',
    },
}))

const SearchBox = ({placeHolder, handleChange}) => {
    const classes = useStyles();
    return(
            <div className={classes.root} 
            style={{ margin: "20px", padding: "0px"}}
            >
            <SearchIcon className={classes.searchicon} style={{ margin: "15px", padding: "0px"}}/>
                <TextField style={{ marginTop: "-2px", marginLeft: '-25px', padding: "0px"}}
                    variant="outlined"
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
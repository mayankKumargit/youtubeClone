import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from "@mui/material"
import {logo} from '../utils/constants.js'
import SearchBar from './SearchBar.jsx'

function Navbar() {
  return (
    <Stack direction="row" 
           alignItems="center" 
           p={2} 
           sx={{position:"sticky", background:"black", top:0,justifyContent:'space-between'}}
    >
        <Link to='/' style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt='logo' height={45}></img>
        </Link>
        <SearchBar></SearchBar>
    </Stack>
  )
}

export default Navbar

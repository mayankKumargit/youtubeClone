import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

function SearchBar() {
  	return (
		<Paper components="form"
			   onSubmit={()=>{}}
			   sx={{
				  borderRadius:20,
				  border:'2px solid violet',
				  pl:2,
				  boxShadow:'none',
				  mr:{sm:5}
			   }}>
			<input
				className="search-bar"
				placeholder="search"
			    onChange={()=>{}}
			/>
			<IconButton type='submit' sx={{p:'10px', color:'red'}}>
			   <Search></Search>
			</IconButton>
		</Paper>
  	)
}

export default SearchBar

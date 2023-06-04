import React from 'react'
import { Stack } from '@mui/material'
import {categories} from '../utils/constants.js'

function Sidebar({selectedCategory,setSelectedCategory}) {

    return (
        <Stack direction="row"
               sx={{
                    overflow:"auto",
                    height:{sx:'auto',md:"95%"},
                    flexDirection:{md:'column'}
               }}>
            {categories.map((category)=>{
                return (
                    <button className="category-btn"
                            style={{background:category.name===selectedCategory && 'red',color:'white'}}
                            key={category.name}
                            onClick={()=>setSelectedCategory(category.name)}>
                        <span style={{color:category.name===selectedCategory ? 'white' : 'red',marginRight:'15px'}}>
                            {category.icon}</span>
                        <span style={{opacity:category.name===selectedCategory ? '1' : '0.7'}}>{category.name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default Sidebar

import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box,Typography} from '@mui/material'

import Video from './Video'
import {fetchFromAPI} from '../utils/fetchFromAPI.js'

function SearchFeed() {
    const [videos,setVideos]=useState([])
    const {searchTerm}=useParams()
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}}`).then((data)=>{
            console.log(data)
            setVideos(data.items)})
    },[searchTerm])

    return (
            <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
                <Typography variant="h4"
                            fontWeight="bold" mb={2}
                            sx={{color:'white'}}>
                            Search Results for
                            <span style={{color:'red',paddingLeft:'10px'}}>{searchTerm}</span>
                </Typography>
                <Video videos={videos}></Video>
            </Box>
    )
}

export default SearchFeed

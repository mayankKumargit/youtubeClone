import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Video from './Video'
import ChannelCard from './ChannelCard'
import {fetchFromAPI} from '../utils/fetchFromAPI.js'

function ChannelDetail() {
    const {id}=useParams()
    console.log(id)
    const [channelDetail,setChannelDetail]=useState(null)
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{
            console.log(data.items[0])
            setChannelDetail(data?.items[0])
        })

        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then((data)=>{
            console.log(data.items)
            setVideos(data?.items)
        })

    },[id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{background:'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
                             zIndex:10,height:'300px'}}/>
                <ChannelCard channelDetail={channelDetail} marginTop="-95px"></ChannelCard>
            </Box>
            <Box display="flex" p="2">
                <Box sx={{mr:{sm:'100px'}}}></Box>
                <Video videos={videos}></Video>
            </Box>
        </Box>
    )
}

export default ChannelDetail

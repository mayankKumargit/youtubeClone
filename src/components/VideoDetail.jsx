import React from 'react'
import { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Video from './Video'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Link, useParams } from 'react-router-dom'

function VideoDetail() {
    const {id}=useParams()
    const [videoDetail,setVideoDetail]=useState(null)
    const [videos,setVideos]=useState(null)
    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
            setVideoDetail(data.items[0])
        })

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>{
            setVideos(data.items)
        })
    },[id])
    if(!videoDetail?.snippet) return 'Loading...'
    const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
    return (
        <Box minHeight="95vh">
            <Stack direction={{xs:'column',md:'row'}}>
                <Box flex={1}>
                    <Box sx={{width:'100%',position:'sticky',top:'70px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                                        className="react-player" controls>
                        </ReactPlayer>
                        <Typography color='white' variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{color:'white'}} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{sm:'subtitle1',md:'h6'}} color='white'>
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}></CheckCircle>
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{opacity:0.7}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{opacity:0.7}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
                    <Video videos={videos} direction="column"></Video>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail

import React from 'react'
import { Link } from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoThumbnailUrl,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle} from '../utils/constants.js'

function VideoCard({video}) {
    //console.log(video)
    const {id:{videoId},snippet}=video
    console.log(videoId,snippet) 
    return (
        <Card sx={{width:{md:'350px',sx:'100%'},m:1}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:350,height:190}}>
                </CardMedia>
            </Link>
            <CardContent sx={{backgroundColor:'gray',height:100}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color='white'>
                    {
                        snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)
                    }
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color='white'>
                    {
                        snippet?.channelTitle || demoChannelTitle
                    }
                    <CheckCircle sx={{fontSize:18,color:'green',ml:'5px'}}></CheckCircle>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard

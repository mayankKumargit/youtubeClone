import React from 'react'
import { Link } from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle} from '../utils/constants.js'

function VideoCard({video}) {
    //console.log(video)
    const {id:{videoId},snippet}=video
    //console.log(videoId,snippet) 
    return (
        <Card sx={{width:{sx:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:198}}>
                </CardMedia>
            </Link>
            <CardContent sx={{backgroundColor:'gray',height:70}}>
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

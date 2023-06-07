import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

function ChannelCard({channelDetail,marginTop}) {
    console.log(channelDetail)
    console.log(channelDetail?.id?.channelId)
    return (
        <Box sx={{
                    boxShadow:'none',
                    borderRadius:'20px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    width:{xs:'355px',md:'365px'},
                    height:'320px',
                    margin:'auto',
                    marginTop:marginTop
                }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{display:'flex',flexDirection:'column',
                            justifyContent:'center',textAlign:'center',color:'white'}}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{borderRadius:'50%',height:'160px',width:'150px',mb:2,border:'2px solid red'}}>
                    </CardMedia>
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title || "Mayank kumar"}
                        <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}>
                        </CheckCircle>
                    </Typography>
                    {
                        channelDetail?.statistics?.subscriberCount && (
                            <Typography>
                                {
                                    parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())
                                } Subscribers
                            </Typography>
                        )
                    }
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard

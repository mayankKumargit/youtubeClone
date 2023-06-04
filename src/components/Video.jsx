import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


function Video({videos}) {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {
                videos.map((item,idx)=>{
                    return(
                        <Box key={idx}>
                            {item.id.videoId && <VideoCard video={item}></VideoCard>}
                            {item.id.channelId && <ChannelCard video={item}></ChannelCard>}
                        </Box>
                    )
                })
            }
        </Stack>
    )
}

export default Video

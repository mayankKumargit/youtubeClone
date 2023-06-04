
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'



function App() {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor:'black'}}>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' exact element={<Feed></Feed>}></Route>
                    <Route path='/video/:id' element={<VideoDetail></VideoDetail>}></Route>
                    <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
                    <Route path='/search/:searchTerm' element={<SearchFeed></SearchFeed>}></Route>
                </Routes>
            </Box>
        
        </BrowserRouter>
    )
}

export default App

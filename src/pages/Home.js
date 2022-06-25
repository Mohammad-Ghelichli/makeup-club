import React from 'react'
import { Box } from '@mui/material'
///components
import Banner from '../components/Banner'
import Exercise from '../components/Exercise'
import SearchBox from '../components/SearchBox'
const Home = () => {
  return (
    <Box>
        <Banner/>
        <SearchBox/>
        <Exercise/>
    </Box>
  )
}

export default Home
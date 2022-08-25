/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Card } from '@mui/material';
import { Box } from '@mui/system';
const ScrollToTop = () => {
    const [isVisble, SetIsVisble] = useState(false)
    const isToggleVibility = () => {
        if (window.pageYOffset > 300) {
            SetIsVisble(true)
        } else {
            SetIsVisble(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: `smooth`,
        })
    }
    useEffect(() => {
        window.addEventListener(`scroll`, isToggleVibility)
        return () => {
            window.removeEventListener(`scroll`, isToggleVibility)
        }
    }, [])
    return (
        <>
            <Box sx={{ position: `fixed`, bottom: 40, right: 20 }} zIndex='2000'>
                {isVisble && <Card variant="outlined"
                onClick={scrollToTop}
                sx={{ backgroundColor: `rgba(4, 135, 83,0.3)`, color: `white`, 
                      height:`40px`,width:`40px`,
                      '&:hover': { backgroundColor: `#048753` } }}>
                    <ArrowUpwardIcon sx={{m:1,fontSize:`20px`}}/>
                </Card>}
            </Box>
        </>
    )
}

export default ScrollToTop
import { Box } from '@mantine/core'
import React from 'react'
import classes from './landing-resource-box.module.css'

interface LandingResourceBoxProps {
    children: React.ReactNode
}
const LandingResourceBox: React.FC<LandingResourceBoxProps> = ({ children }) => {
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.inner}>
                {children}
            </Box>
        </Box >
    )
}

export default LandingResourceBox
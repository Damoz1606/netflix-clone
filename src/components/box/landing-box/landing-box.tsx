import { Box, BoxProps } from '@mantine/core'
import React from 'react'
import classes from './landing-box.module.css'
import clsx from 'clsx'

interface LandingBoxProps extends BoxProps {
    children: React.ReactNode
}

const LandingBox: React.FC<LandingBoxProps> = ({ children, className, ...props }) => {
    return (
        <Box
            className={clsx(className, classes.container)}
            {...props}>
            {children}
        </Box>
    )
}

export default LandingBox
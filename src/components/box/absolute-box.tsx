import { Box, BoxProps } from '@mantine/core'
import React from 'react'

interface AbsoluteBoxProps extends Omit<BoxProps, 'pos' | 'top' | 'left'> {
    children: React.ReactNode
}

const AbsoluteBox: React.FC<AbsoluteBoxProps> = ({ children, ...props }) => {
    return (
        <Box
            w='100%'
            pos='absolute'
            top='0'
            left='0'
            {...props}>{children}</Box>
    )
}

export default AbsoluteBox
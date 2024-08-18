import { Box, Image, ImageProps } from '@mantine/core'
import React from 'react'
import classes from './absolute-bg.module.css'
import clsx from 'clsx';

interface AbsoluteBgProps extends Omit<ImageProps, 'fit' | 'classNames'> {
    classNames?: {
        wrapper?: string;
        inner?: string;
        image?: string;
    }
    src: string;
    alt: string;
}

const AbsoluteBg: React.FC<AbsoluteBgProps> = ({ classNames, alt, ...props }) => {
    return (
        <Box className={clsx(classes.wrapper, classNames?.wrapper)}>
            <Box className={clsx(classes.inner, classNames?.inner)}>
                <Image
                    className={classNames?.image}
                    fit='cover'
                    alt={alt}
                    {...props} />
            </Box>
        </Box>
    )
}

export default AbsoluteBg
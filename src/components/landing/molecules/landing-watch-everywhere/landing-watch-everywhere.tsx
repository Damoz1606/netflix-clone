import React from 'react'
import LandingResourceBox from '../../atoms/landing-resource-box/landing-resource-box'
import { Box, Image, Text } from '@mantine/core'
import classes from './landing-watch-everywhere.module.css'


interface LandingWatchEverywhereProps {
    src: string;
}
const LandingWatchEverywhere: React.FC<LandingWatchEverywhereProps> = ({ src }) => {
    return (
        <LandingResourceBox>
            <Image
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
                alt='Devices' />
            <Box className={classes.wrapper}>
                <video
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    loop={true}>
                    <source
                        src={src}
                        type="video/mp4" />
                </video>
            </Box>
        </LandingResourceBox>
    )
}

export default LandingWatchEverywhere
import React from 'react'
import LandingResourceBox from '../../atoms/landing-resource-box/landing-resource-box'
import { Box, Image } from '@mantine/core'
import classes from './landing-enjoy.module.css'

interface LandingEnjoyProps {
    src: string;
}
const LandingEnjoy: React.FC<LandingEnjoyProps> = ({ src }) => {
    return (
        <LandingResourceBox>
            <Image
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                alt='Enjoy on your tv' />
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

export default LandingEnjoy
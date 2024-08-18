import React from 'react'
import LandingResourceBox from '../../atoms/landing-resource-box/landing-resource-box'
import { Box, Flex, Image, Text } from '@mantine/core'
import classes from './landing-download.module.css'

interface LandingDownloadProps { }

const LandingDownload: React.FC<LandingDownloadProps> = () => {
    return (
        <LandingResourceBox>
            <Image
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                alt='Download' />
            <Box className={classes.wrapper}>
                <Box className={classes.thumbnail}>
                    <Image
                        src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                        alt='Video icon' />
                </Box>
                <Box className={classes.description}>
                    <Text
                        size='sm'
                        component='p'
                        fw={500}>
                        Stranger Things
                    </Text>
                    <Text
                        size='xs'
                        fw={400}
                        c='blue'
                        component='span'>
                        Downloading...
                    </Text>
                </Box>
                <Image
                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
                    alt='Download status'
                    className={classes.downloadStatus} />
            </Box>
        </LandingResourceBox>
    )
}

export default LandingDownload
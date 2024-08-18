import React from 'react'
import LandingResourceBox from '../../atoms/landing-resource-box/landing-resource-box'
import { Image } from '@mantine/core'

interface LandingKidsProps { }
const LandingKids: React.FC<LandingKidsProps> = ({ }) => {
    return (
        <LandingResourceBox>
            <Image
                src='https://occ-0-228-3933.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55'
                alt='Space for kids' />
        </LandingResourceBox>
    )
}

export default LandingKids
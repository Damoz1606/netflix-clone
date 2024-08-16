import ThemeSwitch from '@/components/theme-toggles/theme-switch'
import { Flex, rem, Tooltip } from '@mantine/core'
import { IconHelp } from '@tabler/icons-react'
import React from 'react'

const HeadBar = () => {
    return (
        <Flex
            px={rem(4)}
            py={rem(8)}
            justify='flex-end'
            direction='row'
            gap={rem(8)}>
            <ThemeSwitch />
            <Tooltip
                withArrow
                label='Clone aplication of netflix using tmdb api'>
                <IconHelp
                    color='white'
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={2.5} />
            </Tooltip>
        </Flex>
    )
}

export default HeadBar
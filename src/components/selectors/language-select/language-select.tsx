import { rem, Select } from '@mantine/core'
import { IconLanguage } from '@tabler/icons-react'
import React from 'react'

const LanguageSelect = () => {
    return (
        <Select
            maw={rem(125)}
            size='xs'
            leftSection={(<IconLanguage stroke={1.5} />)}
            defaultValue="English"
            data={["English", "Español"]}
            allowDeselect={false} />
    )
}

export default LanguageSelect
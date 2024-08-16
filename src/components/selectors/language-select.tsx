import { Select } from '@mantine/core'
import { IconLanguage } from '@tabler/icons-react'
import React from 'react'

const LanguageSelect = () => {
    return (
        <Select
            w='100%'
            leftSection={(<IconLanguage stroke={1.5} />)}
            defaultValue="English"
            data={["English", "Español"]} />
    )
}

export default LanguageSelect
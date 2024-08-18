import { rem, Select } from '@mantine/core'
import { IconLanguage } from '@tabler/icons-react'
import React from 'react'
import classes from './language-select.module.css'

const LanguageSelect = () => {
    return (
        <Select
            classNames={{
                wrapper: classes.languageWrapper,
                input: classes.languageInput
            }}
            maw={rem(125)}
            size='xs'
            leftSection={(<IconLanguage stroke={1.5} />)}
            defaultValue="English"
            data={["English", "Español"]}
            allowDeselect={false} />
    )
}

export default LanguageSelect
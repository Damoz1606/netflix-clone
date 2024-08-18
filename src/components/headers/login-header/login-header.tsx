import IconNetflix from '@/components/icons/icon-netflix'
import LanguageSelect from '@/components/selectors/language-select/language-select'
import { Flex, rem, Button } from '@mantine/core'
import React from 'react'
import classes from './login-header.module.css'

const LoginHeader: React.FC = () => {

    return (
        <Flex
            justify='space-between'
            align='center'>
            <IconNetflix className={classes.icon} />
            <Flex
                direction='row'
                gap={rem(8)}>
                <LanguageSelect />
                <Button size="xs">Sign In</Button>
            </Flex>
        </Flex>
    )
}

export default LoginHeader
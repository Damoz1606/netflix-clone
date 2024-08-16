"use client"

import { Button, Grid, Box, rem, useMantineTheme, Flex } from '@mantine/core'
import React from 'react'
import LanguageSelect from '../selectors/language-select'
import IconNetflix from '../icons/icon-netflix'

const LoginHeader = () => {
    const theme = useMantineTheme();

    return (
        <Box mx={rem(8)} py={rem(32)}>
            <Grid>
                <Grid.Col span={3}>
                    <Flex justify='center'>
                        <IconNetflix
                            color={theme.colors.red[8]}
                            style={{ width: rem(88), height: rem(24) }}
                        />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
                <Grid.Col span={3}>
                    <LanguageSelect />
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button fullWidth>Sign In</Button>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default LoginHeader
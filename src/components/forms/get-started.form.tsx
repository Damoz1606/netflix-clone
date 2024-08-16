"use client"

import { Grid, rem, Input, Button, Text, Box, Flex } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import React from 'react'

const GetStartedForm: React.FC = () => {

    return (
        <Flex
            direction='column'
            gap={rem(16)}
            maw={rem(536)}>
            <Text
                ta='center'
                fw={300}
                size='lg'>
                Ready to watch? Enter your email to create or restart your memebership.
            </Text>
            <Grid gutter={rem(8)}>
                <Grid.Col span={7}>
                    <Input
                        type='email'
                        size='xl'
                        placeholder="Email address" />
                </Grid.Col>
                <Grid.Col span={5}>
                    <Button
                        variant='filled'
                        size='xl'
                        rightSection={(<IconChevronRight stroke={1.5} />)}
                        fullWidth>
                        Get Started
                    </Button>
                </Grid.Col>
            </Grid>
        </Flex>
    )
}

export default GetStartedForm
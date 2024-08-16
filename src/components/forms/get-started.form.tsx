"use client"

import { Grid, rem, Input, Button, Text, Flex } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import React from 'react'

const GetStartedForm: React.FC = () => {
    return (
        <Flex
            maw={rem(536)}
            direction='column'
            justify='center'
            gap={rem(16)}>
            <Text ta='center'>Ready to watch? Enter your email to create or restart your memebership</Text>
            <Grid gutter={rem(4)}>
                <Grid.Col span={8}>
                    <Input
                        size='lg'
                        placeholder="Email address" />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Button
                        size='lg'
                        rightSection={(<IconChevronRight stroke={1.5} />)}
                        fullWidth>Get Started</Button>
                </Grid.Col>
            </Grid>
        </Flex>
    )
}

export default GetStartedForm
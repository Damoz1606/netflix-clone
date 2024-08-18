"use client"

import { Input, Button, Text, Box } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import React from 'react'
import classes from './get-started.form.module.css'

const GetStartedForm: React.FC = () => {

    return (
        <Box
            className={classes.container}>
            <Text
                component='span'
                ta='center'>
                Ready to watch? Enter your email to create or restart your memebership.
            </Text>
            <Box className={classes.control}>
                <Input
                    classNames={{
                        wrapper: classes.emailWrapper,
                        input: classes.emailInput
                    }}
                    type='email'
                    size='lg'
                    placeholder="Email address" />
                <Button
                    variant='filled'
                    size='lg'
                    rightSection={(<IconChevronRight stroke={1.5} />)}>
                    Get Started
                </Button>
            </Box>
        </Box>
    )
}

export default GetStartedForm
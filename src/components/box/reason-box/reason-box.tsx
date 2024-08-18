import { Box, Flex, rem, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './reason-box.module.css'
import clsx from 'clsx';

interface ReasonBoxProps {
    title: string;
    description: string;
    children: React.ReactNode
    reverse?: boolean;
}

const ReasonBox: React.FC<ReasonBoxProps> = ({
    title,
    description,
    reverse = false,
    children
}) => {
    return (
        <Box className={classes.wrapper}>
            <Box className={clsx(classes.inner, { [classes.reversed]: reverse })}>
                <Flex
                    className={classes.description}
                    direction='column'
                    gap={rem(16)}>
                    <Title component='h2'>{title}</Title>
                    <Text component='p' size='lg'>{description}</Text>
                </Flex>
                {children}
            </Box>
        </Box>
    )
}

export default ReasonBox
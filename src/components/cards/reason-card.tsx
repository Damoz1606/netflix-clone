import { Avatar, Box, Flex, Paper, rem, Text, Title } from '@mantine/core'
import React from 'react'
import classes from './reason-card.module.css'

interface ReasonCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ReasonCard: React.FC<ReasonCardProps> = ({
    title,
    description,
    icon
}) => {
    return (
        <Paper className={classes.container}>
            <Box className={classes.inner}>
                <Box>
                    <Title order={4} mb={rem(8)}>{title}</Title>
                    <Text size='sm'>{description}</Text>
                </Box>
                <Flex justify='flex-end'>
                    <Avatar>
                        {icon}
                    </Avatar>
                </Flex>
            </Box>
        </Paper>
    )
}

export default ReasonCard
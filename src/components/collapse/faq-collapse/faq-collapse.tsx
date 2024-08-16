"use client"

import { Box, Group, Collapse, Text, UnstyledButton, Grid, rem } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import React, { useCallback, useState } from 'react'
import classes from './faq-collapse.module.css'
import clsx from 'clsx'

interface FAQCollapseProps {
    title: string;
    content: string;
}

const FAQCollapse: React.FC<FAQCollapseProps> = ({
    title,
    content
}) => {

    const [opened, setOpened] = useState(false);

    const handleTrigger = useCallback(() => setOpened(!opened), [opened]);

    return (
        <Box className={clsx(classes.container, { [classes.opened]: opened })}>
            <Group justify="center" mb={rem(2)}>
                <UnstyledButton
                    onClick={handleTrigger}
                    className={clsx(classes.trigger)}>
                    <Grid gutter={rem(8)}>
                        <Grid.Col
                            className={classes.inner}
                            span={11}>
                            <Text fw='bold'>{title}</Text>
                        </Grid.Col>
                        <Grid.Col
                            className={classes.icon}
                            span={1}>
                            <IconPlus />
                        </Grid.Col>
                    </Grid>
                </UnstyledButton>
            </Group>

            <Collapse
                in={opened}>
                <Box
                    className={clsx(classes.collapse, classes.inner)}>
                    <Text className={classes.preLine}>{content}</Text>
                </Box>
            </Collapse>
        </Box>
    );
}

export default FAQCollapse
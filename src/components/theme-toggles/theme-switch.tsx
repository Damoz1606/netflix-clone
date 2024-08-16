"use client"

import { rem, Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {

    const [mounted, setMounted] = useState(false);
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    useEffect(() => {
        setMounted(true);
    }, []);


    const sunIcon = (
        <IconSun
            style={{ width: rem(12), height: rem(12) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(12), height: rem(12) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    if (!mounted) return null;

    return (
        <Switch
            onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            checked={colorScheme === 'dark'}
            size="xs"
            color="dark.4"
            onLabel={sunIcon}
            offLabel={moonIcon} />
    )
}

export default ThemeSwitch
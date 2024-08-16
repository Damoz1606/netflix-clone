"use client"
import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'

const theme = createTheme({
    primaryColor: 'red'
});

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <MantineProvider
            theme={theme}
            defaultColorScheme='dark'>
            {children}
        </MantineProvider>
    )
}

export default Providers
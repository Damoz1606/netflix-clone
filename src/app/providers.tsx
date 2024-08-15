"use client"
import { MantineProvider } from '@mantine/core'
import React, { useEffect, useState } from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <MantineProvider>
            {children}
        </MantineProvider>
    )
}

export default Providers
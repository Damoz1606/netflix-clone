import { Title, SimpleGrid, Text, rem } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Questions = () => {
    return (
        <>
            <Title order={5}>Question? Call <Link href='tef: 1 (408) 469-4467 (USA)'>1 (408) 469-4467 (USA)</Link></Title>

            <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing={rem(12)}>
                <Link href='#'>
                    <Text size='sm'>FAQ</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Help Center</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Account</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Media Center</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Investor Relations</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Jobs</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Ways to Watch</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Terms of Use</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Privacy</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Cookie Preferences</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Corporate Information</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Contact Us</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Speed Test</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Legal Notices</Text>
                </Link>
                <Link href='#'>
                    <Text size='sm'>Only on Netflix</Text>
                </Link>
            </SimpleGrid>
        </>
    )
}

export default Questions
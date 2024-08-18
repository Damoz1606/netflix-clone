import { SimpleGrid, Text, rem } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Questions = () => {
    return (
        <>
            <Text
                fw={300}
                mb={rem(24)}>
                Question? Call <Link href='tef: 1 (408) 469-4467 (USA)'>1 (408) 469-4467 (USA)</Link>
            </Text>

            <SimpleGrid
                cols={{ base: 2, md: 4 }}
                spacing={rem(16)}>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        FAQ
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Help Center
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Account
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Media Center
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Investor Relations
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Jobs
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Ways to Watch
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Terms of Use
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Privacy
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Cookie Preferences
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Corporate Information
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Contact Us
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Speed Test
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Legal Notices
                    </Text>
                </Link>
                <Link href='#'>
                    <Text
                        fw={50}
                        size='sm'>
                        Only on Netflix
                    </Text>
                </Link>
            </SimpleGrid>
        </>
    )
}

export default Questions
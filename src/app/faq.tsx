import FAQCollapse from '@/components/collapse/faq-collapse/faq-collapse'
import { Box, Flex, rem, Title } from '@mantine/core'
import React from 'react'

const FAQs: { title: string, content: string }[] = [
    {
        title: 'What is Netflix?',
        content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
    },
    {
        title: 'How much does Netflix cost?',
        content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 4.99 to USD 10.99 a month (pre-tax). No extra costs, no contracts."
    },
    {
        title: 'Where I can watch?',
        content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
    {
        title: 'How do I cancel?',
        content: "Netflix is Boxible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
    },
    {
        title: 'What can I watch on Netflix?',
        content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        title: 'Is Netflix good for kids?',
        content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.`
    },
]

const FAQ: React.FC = () => {
    return (
        <Flex
            w='100%'
            direction='column'
            gap={rem(8)}>
            {
                FAQs.map((e, index) => (
                    <FAQCollapse key={index} {...e} />
                ))
            }
        </Flex>
    )
}

export default FAQ
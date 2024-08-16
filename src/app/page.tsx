import { Box, Button, Collapse, Flex, Group, Image, rem, Select, Text, Title } from "@mantine/core";
import classes from "./page.module.css";
import { IconLanguage, IconPlus } from "@tabler/icons-react";
import GetStartedForm from "@/components/forms/get-started.form";
import LoginHeader from "@/components/headers/login-header";

export default function Home() {
  return (
    <main>
      <Box className={classes.banner}>
        <Box className={classes.backgroundContainer}>
          <Box className={classes.container}>
            <Image
              w="auto"
              fit='fill'
              src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/41a6633f-ec44-4289-a34b-165412f9d8f6/EC-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_5601aff3-8923-49a1-a13f-fa951531f040_small.jpg"
              alt="Banner netflix clone" />
            <Box className={classes.shadow} />
          </Box>
        </Box>
        {/* <HeadBar /> */}
        <LoginHeader />
        <Flex
          className={classes.form}
          direction='column'
          align='center'
          pt={rem(88)}
          px={rem(24)}
          gap={rem(16)}>
          <Title order={2} ta='center'>Unlimited movies, TV shows, and more</Title>
          <Text ta='center'>Watch anywhere. Cancel anytime</Text>
          <GetStartedForm />
        </Flex>
      </Box>

      <Box>
        <Title order={3}>Trending Now</Title>
        <Select defaultValue='Global' data={["Global", "Ecuador"]} />
        <Select defaultValue="Movies - English" data={["Movies - English", "Movies - Other Languages", "Tv Shows - English", "Tv Shows - Other languages"]} />
        Carousel
      </Box>

      <Box>
        <Title order={3}>More Reasons to Join</Title>
        <Box>
          <Title order={4}>Enjoy on your TV</Title>
          <Text fw={500}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</Text>
          Image
        </Box>
        <Box>
          <Title order={4}>Download your shows to watch offline</Title>
          <Text fw={500}>Save your favorites easily and always have something to watch</Text>
          Image
        </Box>
        <Box>
          <Title order={4}>Watch everywhere</Title>
          <Text fw={500}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</Text>
          Image
        </Box>
        <Box>
          <Title order={4}>Create profiles for kids</Title>
          <Text fw={500}>Send kids on adventures with their favorite characters in a space made just for them — free with your memebership</Text>
          Image
        </Box>
      </Box>

      <Box>
        <Title order={3}>Frequently Asked Questions</Title>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>What is Netflix?</Button>
          </Group>

          <Collapse in={true}>
            <Text>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</Text>
            <Text>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There&apos;s always something new to discover and new TV shows and movies are added every week!</Text>
          </Collapse>
        </Box>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>How much does Netflix cost?</Button>
          </Group>

          <Collapse in={true}>
            <Text>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 4.99 to USD 10.99 a month (pre-tax). No extra costs, no contracts.</Text>
          </Collapse>
        </Box>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>Where I can watch?</Button>
          </Group>

          <Collapse in={true}>
            <Text>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</Text>
            <Text>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you&apos;re on the go and without an internet connection. Take Netflix with you anywhere.</Text>
          </Collapse>
        </Box>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>How do I cancel?</Button>
          </Group>

          <Collapse in={true}>
            <Text>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</Text>
          </Collapse>
        </Box>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>What can I watch on Netflix?</Button>
          </Group>

          <Collapse in={true}>
            <Text>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Text>
          </Collapse>
        </Box>
        <Box>
          <Group justify="center" mb={5}>
            <Button rightSection={(<IconPlus />)}>What can I watch on Netflix?</Button>
          </Group>

          <Collapse in={true}>
            <Text>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</Text>

            <Text>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don&apos;t want kids to see.</Text>
          </Collapse>
        </Box>
      </Box>

      <Box>
        <GetStartedForm />
      </Box>

      <Box>
        <Title order={5}>Question? Call 1 (408) 469-4467 (USA)</Title>

        <Flex wrap='wrap' gap={rem(8)}>
          <Text>FAQ</Text>
          <Text>Help Center</Text>
          <Text>Account</Text>
          <Text>Media Center</Text>
          <Text>Investor Relations</Text>
          <Text>Jobs</Text>
          <Text>Ways to Watch</Text>
          <Text>Terms of Use</Text>
          <Text>Privacy</Text>
          <Text>Cookie Preferences</Text>
          <Text>Corporate Information</Text>
          <Text>Contact Us</Text>
          <Text>Speed Test</Text>
          <Text>Legal Notices</Text>
          <Text>Only on Netflix</Text>
        </Flex>

        <Select
          leftSection={(
            <IconLanguage />
          )}
          defaultValue="English"
          data={["English", "Español"]} />

        <Text>Netflix Ecuador</Text>
      </Box>

    </main>
  );
}

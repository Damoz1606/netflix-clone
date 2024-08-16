import { Box, Button, Collapse, Flex, Group, Image, rem, Select, Text, Title } from "@mantine/core";
import GetStartedForm from "@/components/forms/get-started.form";
import { IconDevices, IconDeviceTv, IconDownload, IconMoodKid, IconPlus } from "@tabler/icons-react";
import IconNetflix from "@/components/icons/icon-netflix";
import LanguageSelect from "@/components/selectors/language-select/language-select";
import classes from './page.module.css'
import cx from 'clsx'
import ReasonCard from "@/components/cards/reason-card";
import FAQ from "./faq";
import Link from "next/link";
import Questions from "./questions";

export default function Home() {
  return (
    <main className={classes.wrapper}>
      <Box className={classes.topbar}>
        <Box className={classes.inner}>
          <IconNetflix className={classes.icon} />
          <Flex
            direction='row'
            gap={rem(8)}>
            <LanguageSelect />
            <Button size="xs">Sign In</Button>
          </Flex>
        </Box>
      </Box>

      <Box className={cx(classes.container, classes.banner)}>
        <Box className={classes.background}>
          <Box className={classes.inner}>
            <Image
              fit='cover'
              src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/41a6633f-ec44-4289-a34b-165412f9d8f6/EC-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_5601aff3-8923-49a1-a13f-fa951531f040_small.jpg"
              alt="Banner netflix clone" />
          </Box>
        </Box>
        <Box className={classes.content}>
          <Flex
            direction='column'
            align='center'
            justify='center'
            gap={rem(16)}
            my={rem(8)}
            mx={rem(4)}>
            <Title ta='center'>Unlimited movies, TV shows, and more</Title>
            <Text
              size="lg"
              ta='center'>
              Watch anywhere. Cancel anytime.
            </Text>
            <GetStartedForm />
          </Flex>
        </Box>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.inner}>
          <Title order={3}>Trending Now</Title>
          <Select
            defaultValue='Global'
            data={["Global", "Ecuador"]}
            allowDeselect={false} />
          <Select
            defaultValue="Movies - English"
            data={["Movies - English", "Movies - Other Languages", "Tv Shows - English", "Tv Shows - Other languages"]}
            allowDeselect={false} />
          Carousel
        </Box>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.inner}>
          <Title order={3}>More Reasons to Join</Title>
          <ReasonCard
            title={"Enjoy on your TV"}
            description={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."}
            icon={<IconDeviceTv />} />
          <ReasonCard
            title={"Download your shows to watch offline"}
            description={"Save your favorites easily and always have something to watch."}
            icon={<IconDownload />} />
          <ReasonCard
            title={"Watch everywhere"}
            description={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
            icon={<IconDevices />} />
          <ReasonCard
            title={"Create profiles for kids"}
            description={"Send kids on adventures with their favorite characters in a space made just for them — free with your memebership."}
            icon={<IconMoodKid />} />
        </Box>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.inner}>
          <FAQ />
          <Flex
            justify='center'
            align='center'
            mt={rem(32)}>
            <GetStartedForm />
          </Flex>
        </Box>
      </Box>

      <Box className={cx(classes.footer, classes.container)}>
        <Box className={classes.inner}>
          <Questions />

          <Box mt={rem(16)}>
            <LanguageSelect />
          </Box>

          <Text
            my={rem(16)}
            size="sm">
            Netflix Ecuador
          </Text>
        </Box>
      </Box>

    </main>
  );
}

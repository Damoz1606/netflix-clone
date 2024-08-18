import { Box, Flex, rem, Text, Title } from "@mantine/core";
import GetStartedForm from "@/components/forms/get-started.form/get-started.form";
import LanguageSelect from "@/components/selectors/language-select/language-select";
import classes from './page.module.css'
import FAQ from "./faq";
import Questions from "./questions";
import AbsoluteBox from "@/components/box/absolute-box";
import LoginHeader from "@/components/headers/login-header/login-header";
import LandingBox from "@/components/box/landing-box/landing-box";
import AbsoluteBg from "@/components/background/absolute-bg/absolute-bg";
import ReasonBox from "@/components/box/reason-box/reason-box";
import LandingEnjoy from "@/components/landing/molecules/landing-enjoy/landing-enjoy";
import LandingDownload from "@/components/landing/molecules/landing-download/landing-download";
import LandingWatchEverywhere from "@/components/landing/molecules/landing-watch-everywhere/landing-watch-everywhere";
import LandingKids from "@/components/landing/molecules/landing-kids/landing-kids";

export default function Home() {
  return (
    <main className={classes.wrapper}>
      <AbsoluteBox className={classes.topbar}>
        <LoginHeader />
      </AbsoluteBox>

      <LandingBox
        className={classes.bannerWrapper}>
        <AbsoluteBg
          classNames={{
            inner: classes.backgroundInner
          }}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/41a6633f-ec44-4289-a34b-165412f9d8f6/EC-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_5601aff3-8923-49a1-a13f-fa951531f040_small.jpg"
          alt="Banner netflix clone" />
        <Box className={classes.content}>
          <Flex
            direction='column'
            align='center'
            justify='center'
            gap={rem(16)}>
            <Title
              component='h1'
              ta='center'>
              Unlimited movies, TV shows, and more
            </Title>
            <Text
              component='span'
              ta='center'>
              Watch anywhere. Cancel anytime.
            </Text>
            <GetStartedForm />
          </Flex>
        </Box>
      </LandingBox>

      <LandingBox>
        <ReasonBox
          title="Enjoy on your TV"
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.">
          <LandingEnjoy
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
        </ReasonBox>
      </LandingBox>

      <LandingBox>
        <ReasonBox
          reverse
          title="Download your shows to watch offline"
          description="Save your favorites easily and always have something to watch.">
          <LandingDownload />
        </ReasonBox>
      </LandingBox>

      <LandingBox>
        <ReasonBox
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.">
          <LandingWatchEverywhere
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
        </ReasonBox>
      </LandingBox>

      <LandingBox>
        <ReasonBox
          reverse
          title="Create profiles for kids"
          description="Send kids on adventures with their favorite characters in a space made just for them — free with your memebership.">
          <LandingKids />
        </ReasonBox>
      </LandingBox>

      <LandingBox>
        <Box className={classes.faqWrapper}>
          <Box className={classes.faqContent}>
            <Title
              ta='center'
              mb={rem(20)}>
              Frequently Asked Questions
            </Title>
            <FAQ />
            <Flex
              justify='center'
              align='center'
              mt={rem(32)}>
              <GetStartedForm />
            </Flex>
          </Box>
        </Box>
      </LandingBox>

      <LandingBox>
        <Box className={classes.footerWrapper}>
          <Box className={classes.footerInner}>
            <Questions />

            <Box mt={rem(32)}>
              <LanguageSelect />
            </Box>

            <Text
              mt={rem(32)}
              mb={rem(16)}
              size="sm">
              Netflix Ecuador
            </Text>
          </Box>
        </Box>
      </LandingBox>

    </main>
  );
}

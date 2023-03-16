"use client"
import { Flex } from '@mantine/core'
import { HeroSection } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about'
import { ServicesSection } from '@/components/home/services'
import { TestimonySection } from '@/components/home/testimony'

function Home() {
  return (
    <Flex
      direction="column"
      gap={100}
      sx={{
        paddingBottom: "100px"
      }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonySection/>
    </Flex>
  )
}

export default Home;
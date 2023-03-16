"use client"
import Image from 'next/image'
import { Inter, Cormorant, Roboto_Serif, Roboto } from 'next/font/google'
import styles from './page.module.css'
import { Button, Flex, Text } from '@mantine/core'
import { Colours } from '@/colours'
import { HeroSection } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about'
import { ServicesSection } from '@/components/home/services'
import { TestimonySection } from '@/components/home/testimony'

export default function Home() {
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

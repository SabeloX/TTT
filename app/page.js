"use client"
import Image from 'next/image'
import { Inter, Cormorant, Roboto_Serif, Roboto } from 'next/font/google'
import styles from './page.module.css'
import { Button, Flex, Text } from '@mantine/core'
import { Colours } from '@/colours'
import { HeroSection } from '@/components/home/hero'

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <Flex
      direction="column"
      gap={20}
    >
      <HeroSection/>
    </Flex>
  )
}

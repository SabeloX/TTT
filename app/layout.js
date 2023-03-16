'use client';
import { ActionIcon, Button, Flex, Text, TextInput } from '@mantine/core'
import { useRouter, usePathname } from 'next/navigation';
import './globals.css'
import { Colours } from "../colours";
import Image from 'next/image';
import { Cormorant, Roboto_Serif } from "next/font/google";
import { Footer } from '@/components/root-layout/footer';
import { Navbar } from '@/components/root-layout/nav';

const cormorant = Cormorant({ subsets: ['latin'] })
const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

const navbar = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/book-a-session",
    name: "Book a session"
  },
  {
    path: "/services",
    name: "Services"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/footsteps",
    name: "Footsteps"
  },
  {
    path: "/contact",
    name: "Contact"
  }
];

export default function RootLayout({ children }) {
  const router = useRouter();
  const currentRoute = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Talk to Tobo</title>
      </head>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          color: Colours.blue
        }}
      >
        <Flex
          direction="column"
          sx={{
            maxWidth: "1366px",
            width: "100%"
          }}
        >
          <Navbar navbar={navbar} currentRoute={currentRoute} />
          <Flex
            direction="column"
            sx={{
              overflow: "hidden"
            }}
          >
            {children}
          </Flex>
          <Footer/>
        </Flex>
      </body>
    </html>
  )
}

'use client';
import { ActionIcon, Button, Flex, Text, TextInput } from '@mantine/core'
import { useRouter, usePathname } from 'next/navigation';
import './globals.css'
import { Colours } from "../colours";
import Image from 'next/image';
import { Cormorant, Roboto_Serif } from "next/font/google";

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

const socialMedia = [
  {
    path: "",
    icon: "fb"
  },
  {
    path: "",
    icon: "ig"
  },
  {
    path: "",
    icon: "twitter"
  },
  {
    path: "",
    icon: "linkedin"
  }
]

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
            maxWidth: "1300px",

          }}>
        <nav>
          <Flex
            justify="space-between"
            sx={{
              padding: "20px"
            }}
          >
            <Flex
              gap={30}
              align="center"
            >
              <Image
                src="/assets/Logo.svg"
                width={50}
                height={50}
                alt="logo"
                style={{
                  cursor: "pointer"
                }}
                onClick={() => router.push("/")}
              />
            {
                navbar.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: currentRoute === item.path ? Colours.red : Colours.blue,
                      cursor: "pointer"
                    }}
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </Text>
                ))
              }
            </Flex>
            <Flex
              gap={30}
              align="center"
            >
              {
                [{ name: "Blogs", path: "/blogs" }, { name: "Gallery", path: "/gallery" }].map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: currentRoute === item.path ? Colours.red : Colours.blue,
                      cursor: "pointer"
                    }}
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </Text>
                ))
              }
            </Flex>
          </Flex>
        </nav>
        <Flex
          direction="column"
        >
          {children}
        </Flex>
        <Flex
          direction="column"
        >
          <Flex
            sx={{
              padding: "20px",
              }}
              justify="space-between"
          >
            <Flex
              direction="column"
              gap={10}
              sx={{
                width: "330px"
              }}
            >
              <Text
                sx={{
                  color: Colours.blue,
                  fontSize: "22px"
                }}
              >
                Get updates on new blog posts for free.
              </Text>
              <Flex
                sx={{
                  height: "50px"
                }}
              >
                <TextInput
                  placeholder="Your email address"
                  styles={{
                    input: {
                      borderRadius: 0,
                      color: Colours.blue
                    }
                  }}
                />
                <Button
                  sx={{
                    color: Colours.white,
                    backgroundColor: Colours.red,
                    "&:hover": {
                      color: Colours.white,
                      backgroundColor: Colours.red,
                    },
                    borderRadius: 0 
                  }}
                >
                  SUBSCRIBE
                </Button>
              </Flex>
              <Flex
                justify="space-between"
              >
                {
                  socialMedia.map((item, index) => (
                    <ActionIcon
                      key={index}
                    >
                      <a
                        href={item.path}
                        target="_blank"
                      >
                        <Image
                          src={`/icons/${item.icon}.svg`}
                          width={20}
                          height={20}
                          alt="social media"
                        />
                      </a>
                    </ActionIcon>
                  ))
                }
              </Flex>
            </Flex>
              <Flex>
                <Flex
                sx={{
                  padding: "0 30px"
                }}
                  className={robotoSerif.className}
                  gap={40}
                >
                  <Flex
                    direction="column">
                    <Text
                      sx={{
                        fontWeight: 600
                      }}>Resourses</Text>
                    <Text>Buy book</Text>
                  </Flex>
                  <Flex
                    direction="column">
                    <Text
                      sx={{
                        fontWeight: 600
                      }}>Sitemap</Text>
                    <Text>Sitemap</Text>
                    <Text>Sitemap</Text>
                    <Text>Sitemap</Text>
                  </Flex>
              </Flex>
              <Flex
                sx={{
                    borderLeft: `1px solid ${Colours.grey}`,
                  padding: "0 20px"
                  }}
                  direction="column"
                  align="center"
              >
                  <Image
                    src="/assets/Logo.svg"
                    width={130}
                    height={130}
                    alt="logo"
                  />
                  <Text
                    className={cormorant.className}
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600
                    }}
                  >
                    TALK <span style={{ color: Colours.red}}>TO</span> TOBO</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            sx={{
                backgroundColor: Colours.black,
              height: "50px"
              }}
              align="center"
              justify="center"
              direction="column"
          >
            <Text
              sx={{
                color: Colours.white,
                fontSize: "12px"
              }}
            >
              {`Copyright © 2022 DevProjects`}
            </Text>
            <Text
              sx={{
                  color: Colours.white,
                fontSize: "12px"
              }}
              >
                Privacy Link
            </Text>
          </Flex>
          </Flex>
        </Flex>
      </body>
    </html>
  )
}

"use client";

import { Colours } from "@/colours";
import { ActionIcon, Button, Flex, Text, TextInput } from "@mantine/core";
import Image from "next/image";
import { cormorant, robotoSerif } from "../home/hero";

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
  
export const Footer = () => {
    return (
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
    )
}
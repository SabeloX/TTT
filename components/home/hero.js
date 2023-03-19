"use client";
import { Colours } from "@/colours";
import { Button, Flex, Text } from "@mantine/core";
import { Cormorant, Roboto, Roboto_Serif } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const cormorant = Cormorant({ subsets: ['latin'] });
export const robotoSerif = Roboto_Serif({ subsets: ['latin'] });
export const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const HeroSection = () => {
    const router = useRouter();
    return (
        <Flex
            direction="column"
            sx={{
                padding: "20px"
            }}
            gap={30}
        >
            <Text
                sx={{
                    fontSize: "61px",
                    fontWeight: 600,
                    color: Colours.blue,
                    textAlign: "center"
                }}
                className={cormorant.className}
            >
                TALK <span style={{ color: Colours.red }}>TO</span> TOBO
            </Text>
            <Flex
                justify="space-between"
            >
                <Flex
                    direction="column"
                    justify="space-between"
                    sx={{
                        width: "50%"
                    }}
                    gap={30}
                >
                    <Text
                        sx={{
                            fontSize: "60px",
                            fontWeight: 400,
                            color: Colours.red,
                        }}
                        className={robotoSerif.className}
                    >
                        Make success your middle name
                    </Text>
                    <Flex
                        direction="column"
                        gap={10}
                    >
                        <Text
                            sx={{
                                fontSize: "20px",
                                color: Colours.blue,
                                fontWeight: "600"
                            }}
                        >
                            Do you want to change your life? Take the first step by clicking the button below
                        </Text>
                        <Flex>
                            <Button
                                className={roboto.className}
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: `${Colours.red} !important`,
                                    fontWeight: 500,
                                    width: "200px",
                                    fontSize: "20px",
                                    height: "50px"
                                }}
                                onClick={() => router.push("/book-a-session")}
                            >
                                Book a session
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Image
                    src="/assets/Hero Image.svg"
                    width={400}
                    height={400}
                    alt="hero image"
                />
            </Flex>
        </Flex>
    )
}
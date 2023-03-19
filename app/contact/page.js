"use client";

import { Colours } from "@/colours";
import { cormorant, roboto } from "@/components/home/hero";
import Image from "next/image";
import { useState } from "react";

const { Flex, Text, TextInput, Textarea, Button } = require("@mantine/core");
const services = ["Get a quote", "Personal developent", "Business development", "Say Hi"];

const Contact = () => {
    const [service, setService] = useState("");
    return (
        <Flex
            direction="column"
            gap={50}
            sx={{
                padding: "20px",
                paddingBottom: "100px"
            }}
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
                Get <span style={{ color: Colours.red }}>in</span> touch
            </Text>
            <Text
                sx={{
                    fontSize: "20px",
                    color: Colours.red,
                    textAlign: "center"
                }}
                className={roboto.className}
            >
                Contact us for a quote, help or to say hello!
            </Text>
            <Flex
                justify="center"
                gap={20}
            >
                <Flex
                    direction="column"
                    sx={{
                        width: "300px",
                        backgroundColor: Colours.background,
                        borderRadius: "20px",
                        padding: "20px"
                    }}
                    align="center"
                    gap={20}
                >
                    <Image
                        src="/icons/location.png"
                        width={50}
                        height={50}
                    />
                    <Text sx={{textAlign: "center"}}>House of Success, Office No. 1, No. 28 2nd Avenue,Norwood, Mthatha, 5100</Text>
                </Flex>
                <Flex
                    direction="column"
                    sx={{
                        width: "300px",
                        backgroundColor: Colours.background,
                        borderRadius: "20px",
                        padding: "20px"
                    }}
                    align="center"
                    gap={20}
                >
                    <Image
                        src="/icons/viber.png"
                        width={50}
                        height={50}
                    />
                    <Text sx={{textAlign: "center"}}>(076) 961 6702 or (064) 548 8511</Text>
                </Flex>
                <Flex
                    direction="column"
                    sx={{
                        width: "300px",
                        backgroundColor: Colours.background,
                        borderRadius: "20px",
                        padding: "20px"
                    }}
                    align="center"
                    gap={20}
                >
                    <Image
                        src="/icons/email.png"
                        width={50}
                        height={50}
                    />
                    <Text
                        sx={{ textAlign: "center" }}
                    >
                        <a
                            href="mail:tobothabede@gmail.com"
                            target="_blank"
                        >
                            tobothabede@gmail.com
                        </a>
                    </Text>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                gap={20}
                align="center"
            >
                <Text sx={{ fontSize: "20px", fontWeight: 600}}>Contact form</Text>
                <Flex
                    gap={20}
                >
                    <Flex
                        direction="column"
                        gap={20}
                    >
                        <TextInput
                            label="Full name"
                            styles={{
                                input: {
                                    width: "300px",
                                    border: `1px solid lightgray`,
                                    backgroundColor: Colours.background,
                                    borderRadius: "10px"
                                },
                                label: {
                                    color: Colours.blue
                                }
                            }}
                        />
                        <TextInput
                            label="E-mail"
                            styles={{
                                input: {
                                    width: "300px",
                                    borderRadius: "10px",
                                    border: `1px solid lightgray`,
                                    backgroundColor: Colours.background,
                                    "&:focus": {
                                        border: `1px solid ${Colours.grey}`
                                    }
                                },
                                label: {
                                    color: Colours.blue
                                }
                            }}
                            type="email"
                        />
                        <TextInput
                            label="Phone"
                            styles={{
                                input: {
                                    width: "300px",
                                    borderRadius: "10px",
                                    backgroundColor: Colours.background,
                                    border: `1px solid lightgray`,
                                    "&:focus": {
                                        border: `1px solid ${Colours.red}`
                                    }
                                },
                                label: {
                                    color: Colours.blue
                                }
                            }}
                        />
                    </Flex>
                    <Flex>
                        <Textarea
                            label="Message"
                            styles={{
                                input: {
                                    width: "300px",
                                    borderRadius: "10px",
                                    backgroundColor: Colours.background,
                                    "&:focus": {
                                        border: `1px solid ${Colours.red}`
                                    },
                                    border: `1px solid lightgray`,
                                    height: "200px"
                                },
                                label: {
                                    color: Colours.blue
                                }
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                align="center"
                gap={20}
            >
                <Text sx={{ fontSize: "20px", fontWeight: 600}}>Services</Text>
                <Flex
                    gap={30}
                >
                    {
                        services.map((item, index) => (
                            <Flex
                                sx={{
                                    height: "100px",
                                    width: "200px",
                                    backgroundColor: Colours.background,
                                    border: service === item ? `2px solid ${Colours.red}` : "unset",
                                    borderRadius: "20px",
                                    cursor: "pointer"
                                }}
                                align="center"
                                justify="center"
                                key={index}
                                onClick={() => setService(item)}
                            >
                                {item}
                            </Flex>
                        )) 
                    }
                </Flex>
            </Flex>
            <Flex
                justify="center"
            >
                <Button
                    sx={{
                        backgroundColor: `${Colours.red} !important`,
                        width: "200px"
                    }}
                >
                    Send message
                </Button>
            </Flex>
        </Flex>
    )
}

export default Contact;
import { Colours } from "@/colours";
import { Flex, Text } from "@mantine/core"
import Image from "next/image"
import { useEffect, useState } from "react";
import styles from "./testimony.module.css";

export const testimonies = [
    {
        avatar: "/testimonies/pexels-dellon-thomas-1405963.jpg",
        text: "Tobo has helped me a lot with developing and improving my life.",
        author: "Anonymous"
    },
    {
        avatar: "/testimonies/pexels-humphrey-muleba-2058661.jpg",
        text: "I give this business a 5 star rating!",
        author: "Anonymous"
    },
    {
        avatar: "/testimonies/pexels-creation-hill-1681010.jpg",
        text: "You won't be disappointed.",
        author: "Anonymous"
    },
]

export const TestimonySection = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setIndex(index => index === 2 ? 0 : index + 1);
        }, 4000);
    }, []);
    return (
        <Flex
            sx={{
                backgroundColor: Colours.blue,
                color: Colours.white,
                padding: "10px 100px",
                height: "400px",
                boxSizing: "border-box",
                // borderRadius: "30px",
                boxShadow: "3px 3px 8px rgba(0,0,0,16%)"
            }}
            align="center"
        >
            <Flex
                align="center"
                // gap={100}
                justify="space-between"
                sx={{
                    width: "100%"
                }}
            >
                <Image
                    src={testimonies[index].avatar}
                    width={250}
                    height={250}
                    alt="avatar"
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />
                <Flex
                    direction="column"
                    gap={50}
                >
                    <Text
                        sx={{
                            fontStyle: "italic",
                            fontSize: "28px"
                        }}
                    >
                        " {testimonies[index].text} "
                    </Text>
                    <Text
                        sx={{
                            fontStyle: "italic",
                            fontSize: "22px",
                            textAlign: "right"
                        }}
                    >
                        - {testimonies[index].author}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
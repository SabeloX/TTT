"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";

const gallery = [
    {
        image: "/assets/pexels-andrea-piacquadio-3775603.jpg",
        description: "Tobo has helped many to improve their physical health.",
        date: "14/06/2022"
    },
    {
        image: "/assets/pexels-august-de-richelieu-4262185.jpg",
        description: "Helping single parent households.",
        date: "18/12/2021"
    },
    {
        image: "/assets/pexels-august-de-richelieu-4262424.jpg",
        description: "Family therapy.",
        date: "09/10/2021"
    },
    {
        image: "/assets/pexels-polina-tankilevitch-7741615.jpg",
        description: "Relationship improvements.",
        date: "13/10/2021"
    },
    {
        image: "/assets/pexels-tima-miroshnichenko-5710930.jpg",
        description: "Focus groups to get inspired by other people's improvements.",
        date: "14/12/2020"
    },
]

function Gallery() {
    return (
        <Flex
            direction="column"
            gap={50}
            sx={{
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
                Gallery
            </Text>
            <Flex
                direction="column"
                sx={{
                    backgroundColor: Colours.white
                }}
            >
                {
                    gallery.map((item, index) => (
                        <Flex
                            key={index}
                            justify="center"
                        >
                            <Image
                                src={item.image}
                                width={500}
                                height={500}
                                alt="image"
                                style={{
                                    objectFit: "cover",
                                    order: index % 2 === 0 ? 1 : 0,
                                    // borderRadius: "20px",
                                    width: "50%"
                                }}
                            />
                            <Flex
                                justify="center"
                                sx={{
                                    width: "50%",
                                    padding: "20px",
                                    boxSizing: "border-box"
                                }}
                                direction="column"
                                gap={40}
                            >
                                <Text sx={{ textAlign: "center", fontSize: "24px" }}>{item.description}</Text>
                                <Text sx={{ textAlign: "right" }}>- {item.date}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Gallery;
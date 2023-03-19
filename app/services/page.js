"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";

const data = [
    {
        image: "/assets/pexels-karolina-grabowska-4218707.jpg",
        title: "Personal Development",
        description: `There are many areas in personal development and many of these influences the others, either positively or negatively, depending upon the state of the influential factor.
        For none to develop on a personal level one needs to bring about as much balance as in all the areas of their lives as possible`
    },
    {
        image: "/assets/pexels-christina-morillo-1181622.jpg",
        description: "There are many areas in personal develioment and exah of these influences the others, either positively or negatively, depending upon the state of the influential factor. For none to develop on a personal level one needs to bring about as much balance as in all the areas of their lives as possible",
        title: "Business and Executive Coaching"
    }
]

function Services() {
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
                Services
            </Text>
            <Flex
                direction="column"
                gap={50}
            >
                {
                    data.map((item, index) => (
                        <Flex
                            key={index}
                            // justify="space-between"
                            gap={30}
                            sx={{
                                // borderBottom: `1px solid ${Colours.red}`,
                                // paddingBottom: "50px"
                            }}
                        >
                            <Image
                                src={item.image}
                                width={300}
                                height={300}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                }}
                            />
                            <Flex
                                direction="column"
                                gap={30}
                                sx={{
                                    order: index % 2 === 0 ? 0 : 2
                                }}
                            >
                                <Text
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "26px"
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text>{item.description}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Services;
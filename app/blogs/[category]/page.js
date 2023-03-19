"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import { Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { data } from "../page";

function Category({ params }) {
    const router = useRouter();
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
                {params.category.toUpperCase()}
            </Text>
            <Flex
                direction="column"
                gap={30}
            >
                {
                    data.filter((item) => item.title.toLowerCase() === params.category)[0].articles.map((item, index) => (
                        <Flex
                            sx={{
                                boxShadow: "2px 2px 8px rgba(0,0,0,16%)",
                                borderRadius: "20px",
                                height: "250px",
                                padding: "20px",
                                boxSizing: "border-box"
                            }}
                            key={index}
                            align="center"
                            gap={30}
                        >
                            <Image
                                src={item.image}
                                width={300}
                                height={250}
                                alt={item.title}
                            />
                            <Flex
                                direction="column"
                                justify="flex-start"
                                gap={20}
                            >
                                <Text
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: 600
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text>{item.description.substring(0, 200)}...</Text>
                                <Flex>
                                    <Button
                                        variant="subtle"
                                        sx={{
                                            color: Colours.red,
                                            padding: 0,
                                            backgroundColor: `${Colours.white} !important`
                                        }}
                                        onClick={() => router.push(`/blogs/${params.category}/${item.title}`)}
                                    >
                                        Read more
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
            <Flex
                justify="end"
            >
                <Button
                    variant="filled"
                    sx={{
                        width: "200px",
                        backgroundColor: `${Colours.red} !important`,
                        color: Colours.white
                    }}
                    onClick={() => router.push(`/blogs`)}
                >
                    Back
                </Button>
            </Flex>
        </Flex>
    )
}

export default Category;
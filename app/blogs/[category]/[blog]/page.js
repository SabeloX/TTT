"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { data } from "../../page";

const { Flex, Text, Button } = require("@mantine/core");

function Blog({ params }) {
    const router = useRouter();
    const title = (params.blog[0].toUpperCase() + params.blog.substring(1)).split("%20").join(" ");
    const article = data.filter(item => item.title.toLocaleLowerCase() === params.category)[0].articles.filter(item => item.title === title)[0];
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
                {title}
            </Text>
            <Flex
                direction="column"
                gap={30}
                align="center"
            >
                <Image
                    src={article.image}
                    width={1200}
                    height={600}
                    style={{
                        objectFit: "cover"
                    }}
                    alt="article image"
                />
                <Text sx={{textAlign: "center"}}>{article.description.substring(0,900)}</Text>
                <Text sx={{textAlign: "center"}}>{article.description.substring(900, 1800)}</Text>
                <Text sx={{textAlign: "center"}}>{article.description.substring(1800)}</Text>
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
                    onClick={() => router.push(`/blogs/${params.category}`)}
                >
                    Back
                </Button>
            </Flex>
        </Flex>
    )
}

export default Blog;
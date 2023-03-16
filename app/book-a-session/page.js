"use client";

import { Colours } from "@/colours";
import { cormorant, robotoSerif } from "@/components/home/hero";
import { useRouter } from "next/navigation";

const { Flex, Text, Button } = require("@mantine/core");

const data = [
    `A complete program with one client or a group of clients would be covered over a period of either three (3)or
    six (6) months. They would be spread over the year as weekly or fortnightly sessions. The actual cost for each
    coaching program will be calculated based on the number of people enrolled and a quotation submitted on
    request.`,
    `Special workshops, seminars and conferences are conducted as per client's request and costs according to the
    number of participants and days taken.`,
    `Traveling costs are based based on the rate offered by the institution rendering services to and no less than the
    SARS rate per km.`
]

function BookASession() {
    const router = useRouter();
    return (
        <Flex
            direction="column"
            sx={{
                padding: "20px",
                paddingBottom: "100px"
            }}
            gap={50}
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
                Book <span style={{ color: Colours.red }}>a</span> session
            </Text>
            <Text
                sx={{
                    color: Colours.blue,
                    fontWeight: 600,
                    fontSize: "30px"
                }}
                className={robotoSerif.className}
            >
                Session duration and cost
            </Text>
            <Flex
                justify="space-around"
            >
                {
                    data.map((item, index) => (
                        <Flex
                            key={index}
                            sx={{
                                borderRadius: "20px",
                                boxShadow: "2px 2px 8px rgba(0,0,0,16%)",
                                backgroundColor: Colours.white,
                                width: 400,
                                height: 320,
                                color: index === 1 ? Colours.red : Colours.blue,
                                textAlign: "center",
                                boxSizing: "border-box",
                                padding: "20px"
                            }}
                            align="center"
                        >
                            <Text>{item}</Text>
                        </Flex>
                    ))
                }
            </Flex>
            <Text
                sx={{
                    color: Colours.blue,
                    fontSize: "20px"
                }}
            >
                All prices quoted are exclusive of VAT as the company is currently not registered a VAT vendor.
            </Text>
            <Flex
                justify="center"
            >
                <Button
                    sx={{
                        backgroundColor: Colours.red,
                        color: Colours.white,
                        width: "400px",
                        borderRadius: "10px"
                    }}
                    onClick={() => router.push({ pathname: "/contact", query: "book-a-session" })}
                >
                    Request a quotation
                </Button>
            </Flex>
        </Flex>
    )
}

export default BookASession;
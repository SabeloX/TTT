"use client";

import { Colours } from "@/colours";
import { Flex, Text } from "@mantine/core";
import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

export const AboutSection = () => {
    return (
        <Flex
            direction="column"
            className={robotoSerif.className}
            sx={{
                backgroundColor: Colours.red,
                color: Colours.white,
                height: "200px",
                padding: "20px",
                textAlign: "center"
            }}
            justify="center"
            align="centre"
            gap={20}
        >
            <Text
                sx={{
                    fontWeight: 600,
                    fontSize: "24px"
                }}
            >
                Why choose Talk To Tobo?
            </Text>
            <Text>
                As I work with leaders from organizations in the corporate world, small businesses, associations and all levels of government, what I consistently see is a collective desire to respond to on-going change and disruption with less struggle and anxiety.
            </Text>
        </Flex>
    );
}
"use client";

import { Colours } from "@/colours";
import { cormorant } from "@/components/home/hero";
import styles from "./about.module.css";

const { Flex, Text } = require("@mantine/core");
const { default: Image } = require("next/image");

function About() {
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
                Who <span style={{ color: Colours.red }}>is</span> Tobo?
            </Text>
            <Flex
                justify="space-around">
                <Image
                    width={400}
                    height={400}
                    src="/assets/Tobo.svg"
                    style={{
                        objectFit: "cover",
                        borderRadius: "20px"
                    }}
                    className={styles.image}
                />
                <Flex
                    direction="column"
                    gap={30}
                    sx={{
                        width: "50%"
                    }}
                >
                    <Text sx={{ textAlign: "center" }}>Tobo is not your average Life Coach and she’s definitely not your average Motivational Speaker. She is a trendsetter and the first to establish a Life Coaching Company in Mthatha. As one of Eastern Cape’s most popular motivational speakers, Tobo has encouraged thousands of people to ‘have a go’ and create positive change. Whether it’s in the office, on the field, in the classroom, or out in the world, Tobo will get your audience buzzing with good vibes and great energy.</Text>
                    <Text sx={{ textAlign: "center" }}>Ntombomzi Nompumelelo Thabede, affectionately known as Tobo is a Certified Life Coach (New Insights Africa) with an Honours Degree in Psychology (Unitra); a Certificate in Executive Coaching (GetSmarter) and currently enrolled for a Certificate in Pastoral Thanatology (the study of Dying, Death, Loss, Grief and Bereavement) with the American Institute of Healthcare Professionals. Tobo is an inspirational female motivational speaker creating an experience live or online. As a result of her style and actionable content, she will help you regain focus, re-set priorities, reduce stress and communicate more effectively, optimize performance, boost productivity, and improve time management.</Text>
                    <Text sx={{ textAlign: "center" }}>Her coaching is tailored to your goals and designed to impart proven skills & techniques that ensure transformation. Through authentic storytelling and humour, Tobo connects with people on a deep level. She doesn’t speak from a soapbox or sugar-coat the tricky stuff. She captivates her coaching clients and audiences with thought provoking and action inducing questions. No matter what goals you’re chasing – or what challenges you’re facing – Tobo shows that anything is possible with a plan, a purpose and a positive attitude.</Text>
                </Flex>
            </Flex>
            <Text sx={{ textAlign: "center" }}>Tobo is a self-published author, well sort after Life Coach and Motivational Speaker & gives talks on Community Radios</Text>
        </Flex>
    )
}

export default About;
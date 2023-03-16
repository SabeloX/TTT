import { Colours } from "@/colours"
import { Flex, Text } from "@mantine/core"
import { robotoSerif } from "./hero"

const data = [
    {
        label: "Vision",
        value: "Emotionally intelligent clients who intentionally live fulfilled lives with a clear purpose."
    },
    {
        label: "Mission",
        value: "We are a trendsetting and innovative coaching company committed to ensuring that out clients realize their full potential, experience continuous growth, excel in everything they do, find fulfillment and live their lives of purpose."
    },
    {
        label: "Values",
        value: `RESPECT.
        GROW and EXCELL.
        COMMITTED and ACCESSIBLE.
        PROFESSIONALISM, CONFIDENTIALITY and INTEGRITY.
        LIFE TRANSFORMATION through THOUGHT TRANSFORMATION.`
    }
]

export const ServicesSection = () => {
    return (
        <Flex
            justify="space-around"
        >
            {
                data.map((item, index) => (
                    <Flex
                        direction="column"
                        sx={{
                            boxShadow: "2px 2px 8px rgba(0,0,0,16%)",
                            backgroundColor: Colours.white,
                            borderRadius: "30px",
                            width: "400px",
                            height: "380px",
                            color: Colours.blue,
                            padding: "60px 20px",
                            boxSizing: "border-box",
                            textAlign: "center"
                        }}
                        gap={20}
                        className={robotoSerif.className}
                        key={index}
                    >
                        <Text
                            sx={{
                                fontSize: "28px",
                                fontWeight: 600
                            }}
                        >
                            {item.label}
                        </Text>
                        <Text
                            sx={{
                                fontSize: "20px"
                            }}>{item.value}</Text>
                    </Flex>
                ))
            }
        </Flex>
    )
}
export const Shell = () => {
    return (
        <Flex
            direction="column"
            gap={100}
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
                TALK <span style={{ color: Colours.red }}>TO</span> TOBO
            </Text>
            {children}
        </Flex>
    )
}
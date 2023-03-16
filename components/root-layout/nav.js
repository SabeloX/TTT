import { Colours } from "@/colours"
import { Flex, Text } from "@mantine/core"
import Image from "next/image"
import { robotoSerif } from "../home/hero"

export const Navbar = ({ navbar, currentRoute }) => {
    return (
        <nav>
          <Flex
            justify="space-between"
            sx={{
              padding: "20px"
            }}
              className={robotoSerif.className}
          >
            <Flex
              gap={30}
              align="center"
            >
              <Image
                src="/assets/Logo.svg"
                width={80}
                height={80}
                alt="logo"
                style={{
                  cursor: "pointer"
                }}
                onClick={() => router.push("/")}
              />
            {
                navbar.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: currentRoute === item.path ? Colours.red : Colours.blue,
                      cursor: "pointer",
                      fontSize: "20px",
                      "&:hover": {
                        color: Colours.red,
                        textShadow: `2px 2px 8px ${Colours.red}`,
                        textDecoration: "underline"
                      },
                      textDecoration: currentRoute === item.path ? "underline" : "none"
                    }}
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </Text>
                ))
              }
            </Flex>
            <Flex
              gap={30}
              align="center"
            >
              {
                [{ name: "Blogs", path: "/blogs" }, { name: "Gallery", path: "/gallery" }].map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: currentRoute === item.path ? Colours.red : Colours.blue,
                      cursor: "pointer",
                      fontSize: "20px",
                      "&:hover": {
                        color: Colours.red,
                        textShadow: `2px 2px 8px ${Colours.red}`,
                        textDecoration: "underline"
                      },
                      textDecoration: currentRoute === item.path ? "underline" : "none"
                    }}
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </Text>
                ))
              }
            </Flex>
          </Flex>
        </nav>
    )
}
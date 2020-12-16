import {
  Flex,
  Stack,
  Box,
  useColorMode,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "gray.300", dark: "gray.600" };
  const textColor = { light: "black", dark: "gray.100" };
  const imgColor: any = { dark: "gray.700" };
  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      justify="center"
      align="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "100vw", "80vw", "80vw"]} justify="space-around">
        <Link as={ReachLink} to="/">
          <Box>
            <Image
              h="4vh"
              src="https://i.postimg.cc/6Q2mG0fX/logo-01.png"
              alt="Logo of xEatz"
              bg={imgColor[colorMode]}
            />
          </Box>
        </Link>
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/">
              Restaurants
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/food-items" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/food-items">
              Food Items
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/customers" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/customers">
              Customers
            </Link>
          </Box>
          <Box
            position="relative"
            //opacity={window.location.pathname !== "/orders" ? 0.4 : 1}
            opacity={1}
          >
            <Link as={ReachLink} to="/orders">
              Orders
            </Link>
          </Box>
        </Stack>
        <Box>
          <IconButton
            aria-label=""
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
}

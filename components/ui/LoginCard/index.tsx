import {
    Box,
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
    Flex,
    IconButton,
    useColorMode,
    Heading,
    Link,
    Text,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
} from "@chakra-ui/core";

import React from "react";
import "@emotion/react";

const VARIANT_COLOR = "teal";

const LoginCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset>
                    <LoginArea />
                </CSSReset>
            </ColorModeProvider>
        </ThemeProvider>
    );
};
const LoginArea = () => {
    return (
        <Flex minHeight="100wh" width="full" align="center" justifyContent="center">
            <Box
                borderWidth={1}
                px={4}
                width="full"
                maxWidth="500px"
                borderRadius={4}
                textAlign="center"
                boxShadow="lg"
            >
                <ThemeSelector />
                <Box p={4}>
                    <LoginHeader />
                    <LoginForm />
                </Box>
            </Box>
        </Flex>
    );
};

const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box textAlign="right" py={4}>
            <IconButton
                aria-label="Search database"
                icon={colorMode === "light" ? "moon" : "sun"}
                onClick={toggleColorMode}
                variant="ghost"
            />
        </Box>
    );
};
const LoginHeader = () => {
    return (
        <Box>
            <Heading>Sign In Your Account</Heading>
            <Text>
                Or<Link color={`${VARIANT_COLOR}.500`}>Start your 14 days trial</Link>
            </Text>
        </Box>
    );
};

const LoginForm = () => {
    return (
        <Box my={8} textAlign="left">
            <form>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email address" />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Stack isInline justifyContent="space-between" mt={4}>
                    <Box>
                        <Checkbox>Remenber Me</Checkbox>
                    </Box>
                    <Box>
                        <Link color={`${VARIANT_COLOR}.500`}>Forgot your password=</Link>
                    </Box>
                </Stack>
                <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
                    Sing In
                </Button>
            </form>
        </Box>
    );
};
export default LoginCard;

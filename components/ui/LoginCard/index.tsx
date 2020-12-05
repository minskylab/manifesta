import {
    Box,
    ThemeProvider,
    theme,
    Flex,
    Heading,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
} from "@chakra-ui/react";

 import React from "react";
 import "@emotion/react";

const VARIANT_COLOR = "teal";

const LoginCard = () => {
    return (
        <ThemeProvider theme={theme}>
                    <LoginArea />
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
                <Box p={4}>
                    <LoginHeader />
                    <LoginForm />
                </Box>
            </Box>
        </Flex>
    );
};

const LoginHeader = () => {
    return (
        <Box>
            <Heading>Sign In Your Account</Heading>
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
                        <Link color={`${VARIANT_COLOR}.500`}>Forgot your password?</Link>
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

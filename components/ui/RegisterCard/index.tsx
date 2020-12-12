import React from "react";
import {
Text,
Box,
Button,
Input,
Stack,
Link,
Checkbox,
Heading,
FormControl,
FormLabel,
FormErrorMessage,
FormHelperText,
ThemeProvider,
theme,
Flex,
} from "@chakra-ui/react";

const RegisterCard = () => {
    return(
        <ThemeProvider theme={theme}>
            <RegisterArea/>
        </ThemeProvider>
    );
};
const RegisterArea = () => {
    return(
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
                    <RegisterHeader />
                    <RegisterForm />
                </Box>
            </Box>
        </Flex>
    );
};

const RegisterHeader = () => {
    return(
        <Box>
            <Heading>Create a new account!</Heading>
        </Box>
    );
};
const VARIANT_COLOR = "Blue 500";
const RegisterForm = () => {
    return(
        <Box my={8} textAlign="left">
            <form>
                <FormControl isRequired>
                    <FormLabel>Informacion</FormLabel>
                    <Input placeholder="Rick Sanchez" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Usuario</FormLabel>
                    <Input placeholder="pickleRick" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Correo electronico</FormLabel>
                    <Input type="email" placeholder="r.sanchez@rickverse.com" />
                </FormControl>
                <FormControl isRequired mt={4}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input type="password" placeholder="C0NTR4S3ÑA" />
                </FormControl>
                <Stack isInline justifyContent="space-between" mt={4}>
                    <Box>
                        <Checkbox>He Leido los <Link >Terminos y condiciones</Link></Checkbox>
                    </Box>
                </Stack>
                <Button variantColor={VARIANT_COLOR} width="full" mt={4}>
                    Register
                </Button>
            </form>
        </Box>
    );
};
export default RegisterCard;
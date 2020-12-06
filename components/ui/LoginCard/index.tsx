import {
    theme,
    Box,
    Flex,
    Heading,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
    Center,
    ThemeProvider,
} from "@chakra-ui/react";
import GoogleLogin from 'react-google-login';

import React from "react";
import "@emotion/react";
const responseGoogle = (response: any) => {
    console.log(response);
}

const LoginCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <LoginArea />
        </ThemeProvider>
    );
};
const LoginArea = () => {
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
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
            <Heading color={"gray.800"}>Ingresa con tu cuenta</Heading>
        </Box>
    );
};

const LoginForm = () => {
    return (
        <Box my={8} textAlign="left">
            <form>
                <FormControl>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type="email" placeholder="Ingresa tu correo electrónico" />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input type="password" placeholder="Ingresa tu contraseña" />
                </FormControl>
                <Stack isInline justifyContent="space-between" mt={4}>
                    <Box>
                        <Checkbox>Recordarme</Checkbox>
                    </Box>
                    <Box>
                        <Link>¿Has olvidado tu contraseña?</Link>
                    </Box>
                </Stack>
                <Button color={"white"} bg={"orange.400"} width="full" mt={4}>
                    Iniciar sesión
                </Button>
                <GoogleLogin
                    clientId="300754062537-2f7cqqlcosjkhgca5rlidfh4mm7c0n4m.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button width="full" mt={4} onClick={renderProps.onClick} disabled={renderProps.disabled} >
                           <Box paddingRight={5}> <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4" /><path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853" /><path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05" /><path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z" fill="#EA4335" /></g></svg></Box>Inicia sesión con Google</Button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
        </Box>
    );
};
export default LoginCard;

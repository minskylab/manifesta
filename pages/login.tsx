import { Box, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import LoginCard from "../components/ui/LoginCard";

const LoginPage: NextPage = () => {
    return <Center>
                <Box>Login Page</Box>
                <LoginCard/>
                
    
            </Center>;
};

export default LoginPage;

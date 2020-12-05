import { Box, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import LoginCard from "../components/ui/LoginCard";

// TODO: Put your login card here

const LoginPage: NextPage = () => {
    return <Center>
                <LoginCard/>
            </Center>;
};

export default LoginPage;

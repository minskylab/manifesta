import { Box, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import RegisterCard from "../components/ui/RegisterCard";

// TODO: Put your login card here

const RegisterPage: NextPage = () => {
    return <Center>
                <RegisterCard/>
            </Center>;
};

export default RegisterPage;
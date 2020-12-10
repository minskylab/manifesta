import { Box, Center, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginCard from "../components/ui/LoginCard";
import { useLoginMutation } from "../integration/graphql";

// TODO: Put your login card here

const LoginPage: NextPage = () => {
    const [loginResult, login] = useLoginMutation();
    const toast = useToast();
    const router = useRouter();

    const onLogin = (email: string, password: string) => {
        login({
            email,
            password,
        });
    };

    useEffect(() => {
        if (loginResult.error) {
            toast({
                title: "Error del servidor",
                description: loginResult.error.message,
                status: "error",
                duration: 2000,
            });
        }

        if (loginResult.data && loginResult.data.login) {
            const token = loginResult.data.login.jwt || "";
            localStorage.setItem("token-auth", token);
            router.push("/");
        }
    }, [loginResult]);

    /// TODO: Validate if token exists into local storage

    return (
        <Box>
            <LoginCard onLogin={onLogin} loading={loginResult.fetching} />
        </Box>
    );
};

export default LoginPage;

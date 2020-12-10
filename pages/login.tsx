import { Box, Center, useToast } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginCard from "../components/ui/LoginCard";
import { useLoginMutation } from "../integration/urql";
import nookies from "nookies";

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

            nookies.set(null, "manifestaAuthCookie", token, {});

            router.push("/");
        }
    }, [loginResult]);

    return (
        <Box>
            <LoginCard onLogin={onLogin} loading={loginResult.fetching} />
        </Box>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { manifestaAuthCookie } = nookies.get(ctx);

    console.log(manifestaAuthCookie);
    const isAuthenticated = manifestaAuthCookie == undefined;

    return { props: { isAuthenticated, token: manifestaAuthCookie } };
};

export default LoginPage;

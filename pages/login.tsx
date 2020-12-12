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
        }).then((result) => {
            if (result.data && result.data.login) {
                const token = result.data.login.jwt || "";
                nookies.set(null, "manifestaAuthCookie", token, {});
                router.push("/");
            }
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
    }, [loginResult]);

    return (
        <Box bg={"gray.200"}>
            <LoginCard onLogin={onLogin} loading={loginResult.fetching} />
        </Box>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { manifestaAuthCookie } = nookies.get(ctx);
    // console.log(manifestaAuthCookie);
    if (manifestaAuthCookie) {
        ctx.res.writeHead(301, { Location: "/" });
        ctx.res.end();
    }

    return { props: {} };
};

export default LoginPage;

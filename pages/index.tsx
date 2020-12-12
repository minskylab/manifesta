import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { motion } from "framer-motion";
import ReactionCard from "../components/ui/ReactionCard";
import LoginCard from "../components/ui/LoginCard";
import "@emotion/react";
import { usePublicReactionsQuery } from "../integration/urql";
import { Box, Flex, Heading, Center, Text } from "@chakra-ui/react";
import { CheckIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import ManifestaHeader, { ManifestaRoute } from "../components/ui/Header";
import nookies from "nookies";
import { AuthUserData, getAuthedUser, strapiClient, strapiSDK } from "../lib/server";
import { useRouter } from "next/router";

const MotionFlex = motion.custom(Flex);
interface HomeProps {
    userData?: AuthUserData;
}

const Home: NextPage<HomeProps> = ({ userData }: HomeProps) => {
    const [res, _] = usePublicReactionsQuery();
    const router = useRouter();

    console.log(userData?.id);

    const onRouteChange = (route: ManifestaRoute) => {
        console.log(route);
    };

    const onLogin = async () => await router.push("/login");

    return (
        <>
            <ManifestaHeader
                currentRoute={"explore"}
                onRouteChange={onRouteChange}
                onLogin={onLogin}
                authUserData={userData}
            />
            <Box bg={"gray.50"} w={"100%"}>
                <Flex justifyContent={"center"}>
                    <Box mt={"6rem"}>
                        <Box mb={5}>
                            <Heading>Últimas reacciones</Heading>
                        </Box>
                        <Box>
                            {res.data?.reactions?.map((reaction) => {
                                let positives = 0;
                                let negatives = 0;

                                reaction?.votes?.forEach((vote) => {
                                    if (vote) {
                                        positives++;
                                    } else {
                                        negatives++;
                                    }
                                });

                                return (
                                    <MotionFlex
                                        whileHover={{ scale: 1.06 }}
                                        maxWidth={"38rem"}
                                        minHeight={"8rem"}
                                        p={3}
                                        boxShadow="md"
                                        rounded="md"
                                        bg="white"
                                        mt={3}
                                        _hover={{ boxShadow: "xl" }}
                                    >
                                        <Box flex={5}>
                                            <Text color={"teal.500"} fontWeight={600}>
                                                {reaction?.domain?.host}
                                            </Text>
                                            <Heading size="md">{reaction?.title}</Heading>
                                            <Text noOfLines={2}>{reaction?.body}</Text>
                                            <Flex>
                                                <Box mr={2}>
                                                    <CheckIcon />
                                                </Box>
                                                {reaction?.promoters?.length}
                                            </Flex>
                                        </Box>
                                        <Flex
                                            flex={1}
                                            height={"100%"}
                                            maxWidth={"3rem"}
                                            direction={"column"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                        >
                                            <Box flex={1} textAlign={"center"}>
                                                <Box>
                                                    <TriangleUpIcon />
                                                </Box>
                                                {positives}
                                            </Box>
                                            <Box flex={1} textAlign={"center"}>
                                                {negatives}
                                                <Box>
                                                    <TriangleDownIcon />
                                                </Box>
                                            </Box>
                                        </Flex>
                                    </MotionFlex>
                                );
                            })}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const userData = await getAuthedUser(ctx);

    return { props: { userData } };
};

export default Home;

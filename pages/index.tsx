import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import ReactionCard from "../components/ui/ReactionCard";
import LoginCard from "../components/ui/LoginCard";
import "@emotion/react";
import { usePublicReactionsQuery } from "../integration/graphql";
import { Box, Flex, Heading, Center, Text } from "@chakra-ui/react";
import { CheckIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const MotionFlex = motion.custom(Flex);
interface HomeProps {
    userAgent: string;
}

const Home: NextPage<HomeProps> = ({ userAgent }: HomeProps) => {
    const [res, _] = usePublicReactionsQuery();

    return (
        <Center bg={"gray.50"}>
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
        </Center>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
    return { userAgent };
};

export default Home;

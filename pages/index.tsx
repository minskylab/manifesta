import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { Button, Center, Text } from "@chakra-ui/react";
import ReactionCard from "../components/ui/ReactionCard";

interface HomeProps {
    userAgent: string;
}

const Home: NextPage<HomeProps> = ({ userAgent }: HomeProps) => {
    return (
        <Center>
            <Text>Hello</Text>
            <Button>Click Me</Button>
        </Center>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
    return { userAgent };
};

export default Home;

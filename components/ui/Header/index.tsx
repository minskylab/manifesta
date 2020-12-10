import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const ManifestaHeader = () => {
    return (
        <Flex w={"100%"} bg={"white"} boxShadow="md" py={3} zIndex={10} position={"fixed"} top={0}>
            <Box display="flex" flexDirection="column" justifyContent="center" ml={4}>
                <Text>MANIFESTA</Text>
            </Box>
            <Box ml={"auto"} display="flex" flexDirection="column" justifyContent="center" mr={4}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
        </Flex>
    );
};

export default ManifestaHeader;

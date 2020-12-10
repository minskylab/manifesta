import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface ManifestaLogoProps {}

const ManifestaLogo: FC<ManifestaLogoProps> = ({}: ManifestaLogoProps) => {
    return (
        <Box>
            <Text fontFamily={"Rubik"} fontSize={"1.42rem"} fontWeight={"700"}>
                MANIFESTA
            </Text>
        </Box>
    );
};

export default ManifestaLogo;

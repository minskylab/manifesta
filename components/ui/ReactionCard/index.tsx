import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface ReactionCardProps {
    reactionMessage?: string;
}

const ReactionCard: FC<ReactionCardProps> = (props) => {
    return (
        <Box>
            <Box>This is a reaction</Box>
            <Box>{props.reactionMessage}</Box>
        </Box>
    );
};

export default ReactionCard;

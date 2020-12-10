import React, { FC } from "react";
import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Tag, Text } from "@chakra-ui/react";
import ManifestaLogo from "../../manifesta/Logo";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { AuthUserData } from "../../../lib/server";

export type ManifestaRoute = "explore" | "domains" | "trending" | "aboutus";

interface ManifestaHeaderProps {
    currentRoute: ManifestaRoute;
    onRouteChange: (route: ManifestaRoute) => void;
    onLogin: () => void;
    withAlphaTag?: boolean;
    authUserData?: AuthUserData;
}

const ManifestaHeader: FC<ManifestaHeaderProps> = ({
    withAlphaTag,
    currentRoute,
    onRouteChange,
    onLogin,
    authUserData,
}: ManifestaHeaderProps) => {
    const routeNames: { [key: string]: string } = {
        explore: "Explore",
        domains: "Domains",
        trending: "Trending",
        aboutus: "About Us",
    };

    return (
        <Flex w={"100%"} bg={"white"} boxShadow="md" py={3} zIndex={10} position={"fixed"} top={0}>
            <Box display="flex" flexDirection="column" justifyContent="center" ml={4}>
                <ManifestaLogo />
            </Box>
            {withAlphaTag && (
                <Box display="flex" flexDirection="column" justifyContent="center" ml={2}>
                    <Tag size={"sm"} colorScheme={"green"}>
                        alpha
                    </Tag>
                </Box>
            )}
            <Box display="flex" flexDirection="column" justifyContent="center" ml={5}>
                <Menu>
                    <MenuButton as={Button} leftIcon={<Icon as={FiMenu} />} colorScheme="gray" variant="ghost">
                        {routeNames[currentRoute]}
                    </MenuButton>
                    <MenuList>
                        {Object.entries(routeNames).map(([key, val]) => (
                            <MenuItem
                                isDisabled={key === currentRoute}
                                onClick={() => onRouteChange(key as ManifestaRoute)}
                            >
                                {val}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
            <Box ml={"auto"} display="flex" flexDirection="column" justifyContent="center" mr={4}>
                {authUserData ? (
                    <Avatar name={authUserData.username} />
                ) : (
                    <Button colorScheme="orange" variant="solid" onClick={onLogin} rightIcon={<Icon as={FiLogIn} />}>
                        Login
                    </Button>
                )}
            </Box>
        </Flex>
    );
};

export default ManifestaHeader;

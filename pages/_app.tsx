import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, Provider as URQLProvider } from "urql";
import { STRAPI_GRAPHQL_API } from "../constants/api";

const client = createClient({
    url: STRAPI_GRAPHQL_API,
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <URQLProvider value={client}>
            <ChakraProvider resetCSS>
                <Component {...pageProps} />
            </ChakraProvider>
        </URQLProvider>
    );
};

export default MauthApp;

import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, Provider as URQLProvider } from "urql";

const client = createClient({
    url: "http://174.138.47.0/graphql",
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

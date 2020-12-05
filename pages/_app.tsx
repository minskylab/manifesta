import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, Provider as URQLProvider } from "urql";

const client = createClient({
    url: "https://fairpay.dev.minsky.cc/graphql",
});

const MauthApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // @ts-ignore
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <URQLProvider value={client}>
            <ChakraProvider resetCSS>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </URQLProvider>
    );
};

export default MauthApp;
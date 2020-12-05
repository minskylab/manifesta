import React from "react";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class ManifestaDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <ColorModeScript initialColorMode="light" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default ManifestaDocument;

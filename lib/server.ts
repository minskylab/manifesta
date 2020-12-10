import { GraphQLClient } from 'graphql-request';
import { GetServerSidePropsContext } from 'next';
import { STRAPI_GRAPHQL_API } from '../constants/api';
import { getSdk } from '../integration/requests';
import nookies from "nookies";

export const strapiClient = new GraphQLClient(STRAPI_GRAPHQL_API);
export const strapiSDK = getSdk(strapiClient);

export interface AuthUserData {
    id: string;
    username: string;
    email: string;
}

export const getAuthedUser = async (ctx: GetServerSidePropsContext): Promise<AuthUserData | null> => {
    const { manifestaAuthCookie } = nookies.get(ctx);
    const isAuthenticated = manifestaAuthCookie !== undefined;

    if (isAuthenticated) {
        strapiClient.setHeader("Authorization", `Bearer ${manifestaAuthCookie}`);
        const me = await strapiSDK.Me();

        return {
            id: me.data?.me?.id || "",
            username: me.data?.me?.username || "",
            email: me.data?.me?.email || ""
        }
    }

    return null;
}
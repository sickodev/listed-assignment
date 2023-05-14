import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!GOOGLE_CLIENT_ID) throw new Error("Empty or Invalid Client ID");

if (!GOOGLE_CLIENT_SECRET) throw new Error("Empty or Invalid Client Secret");

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/signIn",
    },
    callbacks: {
        async redirect() {
            return "/";
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

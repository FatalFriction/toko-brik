import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {
                label: "Username",
                type: "text",
                placeholder: "input your username"
            },
            password: {
                label: "password",
                type: "password",
                placeholder: "input your password"
            }
        },
        async authorize(credentials) {
            const user = { id: "12", name: "Michael Florentio", password: "nextauth" }

            if(credentials?.username === user.name && credentials?.password === user.password) {
                return user
            }
            else {
                return null
            }
        }
    })
    ],
}
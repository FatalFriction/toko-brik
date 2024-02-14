import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compare } from "bcrypt";
import db from "@/modules/db"

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/signin",
        newUser: "/signup",
    },
    providers: [
    //     GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    // }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: {
                label: "Email",
                type: "email",
                placeholder: "johndoe@gmail.com"
            },
            password: {
                label: "password",
                type: "password",
                placeholder: "input your password"
            }
        },
        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Invalid Credentials")
            }
            
            const exist = await db.user.findUnique({
                where: { email: credentials?.email }
            })

            if(!exist) {
                throw new Error("User not found")
            }

            const passFind = await compare(credentials!.password, exist.password)

            if(!passFind) {
                throw new Error("Password Invalid")
            }

            return { 
                id: `${exist.id}`,
                username: exist.username,
                email: exist.email
            }
        }
    })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                return {
                    ...token,
                    username: user.username
                }
            }
        return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                }
            }
        },
    }
}
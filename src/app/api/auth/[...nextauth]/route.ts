import NextAuth from "next-auth"
import { options } from "./options";

const dotenv = require('dotenv');
dotenv.config({ path: '../../../../../.env.development' });

export const handler = NextAuth(options)

export { handler as GET, handler as POST }
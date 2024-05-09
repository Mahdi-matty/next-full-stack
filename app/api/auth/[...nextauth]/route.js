import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // Email/Password authentication provider
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          await connectToDB();
          const user = await User.findOne({ username: credentials.username });

          if (!user) throw new Error("Wrong credentials! no such a user");
          console.log("Provided password:", credentials.password);
          console.log("Stored password:", user.password);
          if (!user || !(await user.isCorrectPassword(credentials.password))) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error)
        }
      }
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session?.user?.email });
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
      } catch (error) {
        console.error("Error in session callback:", error);
      }
      return session;
    },
    async signIn(user) {
      try {
        await connectToDB();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  },
  session: {
    // Set session maxAge to 2 hours (in seconds)
    maxAge: 2 * 60 * 60, // 2 hours
  },
});

export { handler as GET, handler as POST }


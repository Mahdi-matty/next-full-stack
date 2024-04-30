import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // Email/Password authentication provider
      credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }       
      },
      async authorize(credentials){
        await connectToDB();
        const { username, password } = credentials;
        const user = await User.findOne({ username });
        if (!user || !(await user.isCorrectPassword(password))) {
          return null;
        }
        return user
      }
    }),
    GoogleProvider({
      // Google OAuth provider
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async session({ session, user }) {
      let sessionUser
      if (user) {
        if (user.provider === 'google'){
           sessionUser = await User.findOne({ email: session.user.email });
        }
        // Fetch user data from the database based on session email
        
        session.user.id = sessionUser._id.toString();
      }
      return session;
    },
    async signIn([profile, credentials]) {
      try {
        await connectToDB();

        // Check if user exists using Google OAuth
        const userExist = await User.findOne({ email: profile.email });

        // If user doesn't exist, create a new account
        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture
          });
        }

        // Continue with the sign-in process
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
});

export default handler;


export { handler as GET, handler as POST }
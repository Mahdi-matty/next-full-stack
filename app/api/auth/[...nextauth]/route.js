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
        async authorize(credentials) {
          try {
            await connectToDB();
            const { email, password } = credentials;

            // Find user by email
            const user = await User.findOne({ email });

            // If user not found or password doesn't match, return null
            if (!user || !(await user.isCorrectPassword(password))) {
              return null;
            }

            // Return the user object if authentication is successful
            // return { id: user._id.toString(), email: user.email };
          } catch (error) {
            console.error(error);
            return null;
          }
        }
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
          const sessionUser = await User.findOne({ email: session.user.email });
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
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./connection";
import { User } from "./models";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials!!");
    }
    const isMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isMatch) {
      throw new Error("Wrong credentials!");
    }console.log('got logged in just now')
    return user;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          if (user) {
            return user;
          }
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "github") {
        connectToDatabase();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            console.log("Assigning a new user to the OTP");
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            console.log("The new user will look like this:" + newUser);
            await newUser.save();
          }
        } catch (err) {
          console.log("got into the catch block.." + err);
          return false;
        }
      }
      return true;
    },
  },
});

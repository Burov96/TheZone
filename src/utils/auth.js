import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./connection";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      return {error:"This user doesn't exist on the database!"};
    }
    const isMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isMatch) {
      return {error:"Wrong credentials!"};
    }
    console.log({success:'Welcome back, ' + credentials.username + "!"}); 
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
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          // if (user) {
            // console.log('Returning user: '+ Object.values(user));
            return user
          // }
        } catch (err) {
          console.log('Returning eror: '+ err)
          return {error: err}
        }
      },
    }),
    
  ],
  // secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
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
    ...authConfig.callbacks,
  },
});

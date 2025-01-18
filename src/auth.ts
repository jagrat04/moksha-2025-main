import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "email", type: "password" },
      },
      authorize: async ({email,password}) => {
        console.log("check")
        console.log(email,password);
        if(typeof email !== 'string'){
          throw new CredentialsSignin("Invalid email");
        }
        if(typeof password !== "string") {
          throw new CredentialsSignin("Invalid credentials");
        }
        return {email};
      }
      
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
})
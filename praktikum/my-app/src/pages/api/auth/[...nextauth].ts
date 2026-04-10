/// <reference path="../../../types/next-auth.d.ts" />
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "123456"
        ) {
          return {
            id: "1",
            email: credentials.email,
            name: credentials.email,
            fullName: "Admin User", // ✅ tambahan
          };
        }
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.fullName = user.fullName; 
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.fullName = token.fullName as string; 
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
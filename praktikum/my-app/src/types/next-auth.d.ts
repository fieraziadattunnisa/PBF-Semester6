import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    fullName?: string;
  }

  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      fullName?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    fullName?: string;
  }
}
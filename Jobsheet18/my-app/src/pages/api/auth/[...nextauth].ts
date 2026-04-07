import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import GitHubProvider from "next-auth/providers/github";
// 🔹 rename biar tidak bentrok
import { signIn as signInUser, signInWithGoogle } from "@/utils/db/servicefirebase";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    // 🔐 LOGIN EMAIL & PASSWORD
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signInUser(credentials.email);
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) return null;

        return {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          role: user.role,
        };
      },
    }),

    // 🔐 LOGIN GOOGLE
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      // 🔹 LOGIN CREDENTIALS
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      // 🔹 LOGIN GOOGLE (AMAN & STABLE)
      if (account?.provider === "google") {
        const data = {
          fullname: user?.name || profile?.name || token.fullname || "Unknown",
          email: user?.email || profile?.email || token.email || "",
          image: user?.image || profile?.picture || token.image || "",
          type: "google",
        };

        try {
          const result: any = await signInWithGoogle(data);

          if (result?.status) {
            token.fullname = result.data.fullname;
            token.email = result.data.email;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role;
          }
        } catch (error) {
          console.error("Google login error:", error);
        }
      }
      if (account?.provider === "github") {
        const data = {
          fullname: user?.name || profile?.name || token.fullname || "Unknown",
          email: user?.email || profile?.email || token.email || "",
          image: user?.image || profile?.avatar_url || token.image || "",
          type: "github",
        };

        try {
          const result: any = await signInWithGoogle(data); // reuse function

          if (result?.status) {
            token.fullname = result.data.fullname;
            token.email = result.data.email;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role;
          }
        } catch (error) {
          console.error("GitHub login error:", error);
        }
      }

      return token;
    },

    async session({ session, token }: any) {
      session.user = {
        ...session.user,
        email: token.email,
        fullname: token.fullname,
        image: token.image,
        role: token.role,
        type: token.type,
      };

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);

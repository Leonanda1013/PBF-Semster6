# Laporan Praktikum Jobsheet 17

## Identitas

- **Mata Kuliah**: Pemrograman Berbasis Framework
- **Program Studi**: Teknik Informatika
- **Semester**: 6
- **Praktikum**: Jobsheet 17
- **Nama**: Vincentius Leonanda Prabowo
- **NIM**: 2341720149
- **Kelas**: TI-3D


## Langkah 1 & 2 Masuk ke Google CLoude Console & Buat Project Baru
![alt text](images/image1.png)

## Langkah 3 – Konfigurasi OAuth Consent Screen
![alt text](images/image2.png)

## Langkah 4 - Tambahkan Environment Variables
![alt text](images/image3.png)

## Langkah 5 - Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

```js
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import { signIn } from "@/utils/db/servicefirebase";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signIn(credentials.email);

        if (user) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }: any) {
      // Login via Credentials
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      // Login via Google
      if (account?.provider === "google" && user) {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          role: account.provider,
        };

        token.fullname = data.fullname;
        token.email = data.email;
        token.image = data.image;
        token.role = data.role;
      }

      return token;
    },

    async session({ session, token }: any) {
      if (token.email) session.user.email = token.email;
      if (token.fullname) session.user.fullname = token.fullname;
      if (token.image) session.user.image = token.image;
      if (token.role) session.user.role = token.role;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
```

# Langkah 6 - Tambahkan Button Login Google

![alt text](images/image4.png)
![alt text](images/image5.png)

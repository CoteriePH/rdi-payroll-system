import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";
const db = require("../../../models");
const User = db.user;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await User.findOne({
          where: {
            username: credentials.username,
          },
        });

        if (user && credentials?.password && user?.password) {
          if (bcrypt.compareSync(credentials?.password, user.password)) {
            return {
              id: user.id,
              username: user.username,
              role: user.role,
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) {
        token.role = user.role;
      }
      if (user?.username) {
        token.username = user.username;
      }
      if (user?.id) {
        token.id = user.id;
      }
      if (user?.student) {
        token.student = user.student;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.username = token?.username;
      session.user.role = token?.role;
      session.user.id = token?.id;
      session.user.student = token?.student;
      return session;
    },
  },
});

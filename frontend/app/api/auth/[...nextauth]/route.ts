import NextAuth from "next-auth/next";
import { NEXT_AUTH } from "@/lib/auth";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth( NEXT_AUTH)


export const GET = handler
export const POST = handler
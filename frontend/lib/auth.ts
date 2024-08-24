import axios from 'axios';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'

export const NEXT_AUTH = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                username: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: 'password' }
            },
            async authorize(credentials , req) {
                const user = await axios.post('http://localhost:3004/api/user/signin',{
                    username:credentials?.username,
                    password:credentials?.password,
                })
                console.log(user.data)

                if (user.data) {
                    return user.data
                } else {
                    return null
                
                }
                // return null
            },
        },
    
        

    ),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID || '',
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({session,token,user}:any)=>{
            // if (session && session.user){
            //     session.user.id = token.sub
                
            
            // }
            

            return session

        
            

        }
    },
    pages: {
        signIn: "/signin",
    },

}
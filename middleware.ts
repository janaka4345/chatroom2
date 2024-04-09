
import authConfig from "./auth.config"
 import NextAuth from "next-auth"
 export const { auth: middleware } = NextAuth(authConfig)

// TODO advancesetup
// import { auth } from "./auth"

// export default auth((req) => {
//     console.log('req.auth');
    
//   // req.auth
// })

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/dashboard"],
// }
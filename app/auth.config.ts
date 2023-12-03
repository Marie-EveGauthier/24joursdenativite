import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {

        console.log('auth -----', auth)
        console.log('nextUrl -----', nextUrl)
      const isLoggedIn = !!auth?.user;
      const isOnCalendrier = nextUrl.pathname.startsWith('/calendrier');
      if (isOnCalendrier) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/calendrier', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

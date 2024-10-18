import type { Metadata } from "next";
import { Poppins} from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets:['latin'],
  variable: '--font-poppins',
  weight: ['400' , '500' , '600', '700']
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platfrom for event management",
  icons : {
    icon : '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={poppins.variable}>{children}
      </body>
    </html>
    </ClerkProvider>
  );
}


// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import './globals.css'
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }
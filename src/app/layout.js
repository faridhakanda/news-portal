import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

})
export const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

})

export const metadata = {
  title: "Dragon News Application",
  description: "Best news provider in the world by Dragon News!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    className={`${poppins.className} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col">
            {children}
        </body>
    </html>
  );
}

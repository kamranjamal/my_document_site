import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Sidebar/>
        <div className="pl-64 p-8 pt-32 text-gray-600 bg-zinc-900">
          
        {children}
        </div>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono,Archivo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '700'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

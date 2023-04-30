import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Providers } from "./GlobalRedux/provider";

export const metadata = {
  title: "Risk Viz Weather App",
  description: "All your weather application needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

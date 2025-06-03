import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeHydrator from "@/components/layout/ThemeHydrator";
import Providers from "./providers";
import Toasters from "./toasters";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github Finder",
  description: "Your place for searching Github users",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <>
      <html lang="en">
        <body>
          <Providers>
            <ThemeHydrator/>
            <section className="flex flex-col justify-between min-h-screen">
              <Navbar/>
                <main className="container mx-auto px-3 pb-12">
                  {children}
                </main>
              <Footer/>
            </section>
          </Providers>
          <Toasters/>
        </body>
      </html>
    </>
  );
}
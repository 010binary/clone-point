import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ClientProviders from "@/provider/ClientProviders";
import ModalProvider from "@/components/modal/ModalProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FINMAN",
  description: "from E-Zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <ClientProviders>
          <Layout>
            <ModalProvider>
              {children}
            </ModalProvider>
          </Layout>
        </ClientProviders>
      </body>
    </html>
  );
}
